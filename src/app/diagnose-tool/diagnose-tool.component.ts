import {Component, OnInit} from '@angular/core';
import {IRegion, ISymptom, IValue} from "../model/diag";
import {TreeNode} from "primeng/api";
import {RegionService} from "../services/region.service";
import {MuscleService} from "../services/muscle.service";
import {REGIONS} from "../model/regions.data";

interface IColumn {
  name: string;
  regionNameAbbreviation: string;
}

@Component({
  selector: 'app-diagnose-tool',
  templateUrl: './diagnose-tool.component.html',
  styleUrls: ['./diagnose-tool.component.scss']
})
export class DiagnoseToolComponent implements OnInit{

  originRegions: IRegion[] = [];
  regions: TreeNode[] = [];
  selectedNodes: TreeNode<ISymptom>[] = [];
  uiReady: boolean = false;
  tableReady: boolean = false;
  diagClick: boolean = false;
  diagResult: Array<IValue & Record<string, boolean>> = [];
  columns: IColumn[] = [];

  constructor(private regionService: RegionService, private muscleService: MuscleService) {
  }

  ngOnInit(): void {
    // let tmp;
    // if (localStorage) {
    //   tmp = localStorage.getItem("regions");
    // }
    // if (tmp) {
    //   this.originRegions = JSON.parse(tmp);
    //   this.fillTree(this.originRegions);
    // } else {
    this.fillTree(REGIONS);
    // this.regionService.getRegions().subscribe(e => {
    //   // localStorage.setItem("regions", JSON.stringify(e));
    //   this.originRegions = e;
    //   this.fillTree(this.originRegions);
    // })
    // }
  }

  fillTree(regions: IRegion[]) {
    regions.forEach(r => {
      let regNode = {} as TreeNode;
      regNode.label = this.toLowerLabel(r.translateName || r.name);
      regNode.data = r;
      // regNode.selectable = false;
      regNode.children = [] as TreeNode[];
      r.types.forEach(t => {
        let typeNode = {} as TreeNode;
        typeNode.label = this.toLowerLabel(t.translateName || t.name);
        typeNode.data = t;
        // typeNode.selectable = false;
        typeNode.children = [] as TreeNode[];
        t.symptoms.forEach(s => {
          let symNode = {} as TreeNode;
          symNode.label = this.getSymptomLabel(s);
          symNode.data = s;
          typeNode.children?.push(symNode);
        })
        regNode.children?.push(typeNode);
      })
      this.regions.push(regNode)
    })
    this.uiReady = true;
  }


  diagnose() {
    this.diagClick = true;
    this.tableReady = false;
    this.columns = [];
    this.diagResult = [];

    const selectedLeafNodes = this.selectedNodes.filter(e => !e.children || e.children.length === 0);
    const columnKeys = new Set<string>();
    selectedLeafNodes.forEach(node => {
      const symptom = node.data as ISymptom | undefined;
      if (!symptom) {
        return;
      }
      const columnName = this.getSymptomLabel(symptom);
      if (!columnName || columnKeys.has(columnName)) {
        return;
      }
      columnKeys.add(columnName);
      this.columns.push({
        name: columnName,
        regionNameAbbreviation: (node.parent?.parent?.data as IRegion | undefined)?.abbreviation || ''
      });
    });

    const muscleSymptomIndex = this.buildMuscleSymptomIndex(REGIONS);
    const selectedSymptomSet = new Set(this.columns.map(col => col.name));
    const muscleRows = new Map<string, { row: IValue & Record<string, boolean>; score: number }>();

    selectedLeafNodes.forEach(node => {
      const symptom = node.data as ISymptom | undefined;
      if (!symptom) {
        return;
      }
      const columnName = this.getSymptomLabel(symptom);
      symptom.muscles.forEach(muscle => {
        const muscleKey = muscle.name;
        if (!muscleKey) {
          return;
        }
        let entry = muscleRows.get(muscleKey);
        if (!entry) {
          const row = {} as IValue & Record<string, boolean>;
          row.name = muscle.namePl || muscle.name;
          row.score = 0;
          row.symptoms = this.formatMuscleSymptoms(muscleKey, muscleSymptomIndex, selectedSymptomSet);
          entry = { row, score: 0 };
          muscleRows.set(muscleKey, entry);
        }
        if (columnName && !entry.row[columnName]) {
          entry.row[columnName] = true;
          entry.score += 1;
        }
      });
    });

    muscleRows.forEach(entry => {
      entry.row.score = entry.score;
      this.diagResult.push(entry.row);
    });

    this.tableReady = true;
  }

  diagnose2() {
    // this.diagClick = true;
    // this.tableReady = false;
    // this.columns = [];
    // this.diagResult = [];
    //
    // this.muscleService.getDiagnoseResult(this.selectedNodes.filter(e => !e.children || e.children.length == 0).map(e => e.data.id)).subscribe(
    //   e => {
    //     this.selectedNodes.forEach(e => {
    //       if (!e.children || e.children.length == 0) {
    //         // console.log(e);
    //         this.columns.push({name: e.data.translateName, regionNameAbbreviation: e.parent?.parent?.data.abbreviation});
    //       }
    //     })
    //     e.forEach( dto => {
    //       // console.log(dto);
    //       let obj = {} as IValue;
    //       obj.name = dto.name;
    //       obj.score = dto.score;
    //       // obj.symptomsMap = dto.symptomsMap;
    //       Object.assign(obj, dto.symptomsMap);
    //       const map1 = new Map<string, string[]>(Object.entries(dto.symptoms));
    //       obj.symptoms = ""
    //       map1.forEach((v,k) => {
    //         obj.symptoms = obj.symptoms + k + ":<br>"
    //         map1.get(k)?.forEach(v => {
    //           obj.symptoms = obj.symptoms + "-" + v + "<br>"
    //         })
    //         obj.symptoms += "<br>"
    //       })
    //       // console.log(obj);
    //       this.diagResult.push(obj);
    //     })
    //     this.tableReady = true;
    //   }
    // )
  }

  private getSymptomLabel(symptom: ISymptom): string {
    return this.toLowerLabel(symptom.translateName || symptom.name);
  }

  private buildMuscleSymptomIndex(
    regions: IRegion[]
  ): Map<string, Map<string, Map<string, Set<string>>>> {
    const index = new Map<string, Map<string, Map<string, Set<string>>>>();
    regions.forEach(region => {
      const regionLabel = this.toLowerLabel(region.translateName || region.name);
      region.types.forEach(type => {
        const typeLabel = this.toLowerLabel(type.translateName || type.name);
        type.symptoms.forEach(symptom => {
          const label = this.getSymptomLabel(symptom);
          symptom.muscles.forEach(muscle => {
            const key = muscle.name;
            if (!key) {
              return;
            }
            let regionMap = index.get(key);
            if (!regionMap) {
              regionMap = new Map<string, Map<string, Set<string>>>();
              index.set(key, regionMap);
            }
            let typeMap = regionMap.get(regionLabel);
            if (!typeMap) {
              typeMap = new Map<string, Set<string>>();
              regionMap.set(regionLabel, typeMap);
            }
            let symptomSet = typeMap.get(typeLabel);
            if (!symptomSet) {
              symptomSet = new Set<string>();
              typeMap.set(typeLabel, symptomSet);
            }
            symptomSet.add(label);
          });
        });
      });
    });
    return index;
  }

  private formatMuscleSymptoms(
    muscleName: string,
    index: Map<string, Map<string, Map<string, Set<string>>>>,
    selectedSymptoms: Set<string>
  ): string {
    const regionMap = index.get(muscleName);
    if (!regionMap) {
      return '';
    }
    const regionNames = Array.from(regionMap.keys()).sort((a, b) => a.localeCompare(b));
    const lines: string[] = ['<div class="tooltip-block">'];
    regionNames.forEach(regionName => {
      lines.push(`<div class="tooltip-region">${regionName}</div>`);
      const typeMap = regionMap.get(regionName);
      if (!typeMap) {
        return;
      }
      const typeNames = Array.from(typeMap.keys()).sort((a, b) => a.localeCompare(b));
      typeNames.forEach(typeName => {
        lines.push(`<div class="tooltip-type">${typeName}:</div>`);
        const symptoms = Array.from(typeMap.get(typeName) || []);
        symptoms.sort((a, b) => a.localeCompare(b));
        symptoms.forEach(symptom => {
          if (selectedSymptoms.has(symptom)) {
            lines.push(`<div class="tooltip-symptom tooltip-selected">${symptom}</div>`);
          } else {
            lines.push(`<div class="tooltip-symptom">${symptom}</div>`);
          }
        });
      });
    });
    lines.push('</div>');
    return lines.join('');
  }

  private toLowerLabel(label?: string): string {
    return label ? label.toLocaleLowerCase() : '';
  }
}
