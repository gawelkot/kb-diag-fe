import {Component, OnInit} from '@angular/core';
import {RegionService} from "./services/region.service";
import {IMusclesDiagDTO, IRegion, IValue} from "./model/diag";
import {MenuItem, TreeNode} from "primeng/api";
import {MuscleService} from "./services/muscle.service";
import {iterator} from "rxjs/internal/symbol/iterator";
import {REGIONS} from "./model/regions.data";

interface IColumn {
  name: string;
  regionNameAbbreviation: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  activeItem: MenuItem = this.items[0];

  title = 'kb_diag_fe';

  originRegions: IRegion[] = [];
  regions: TreeNode[] = [];
  selectedNodes: TreeNode[] = [];
  uiReady: boolean = false;
  tableReady: boolean = false;
  diagClick: boolean = false;
  diagResult: IValue[] = [];
  columns: IColumn[] = [];
  constructor(private regionService: RegionService, private muscleService: MuscleService) {
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Diagnose', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      { label: 'Chart', icon: 'pi pi-fw pi-calendar', routerLink: ['/chart'] }
    ];

    this.activeItem = this.items[0];
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
      regNode.label = r.translateName;
      regNode.data = r;
      // regNode.selectable = false;
      regNode.children = [] as TreeNode[];
      r.types.forEach(t => {
        let typeNode = {} as TreeNode;
        typeNode.label = t.translateName;
        typeNode.data = t;
        // typeNode.selectable = false;
        typeNode.children = [] as TreeNode[];
        t.symptoms.forEach(s => {
          let symNode = {} as TreeNode;
          symNode.label = s.translateName;
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
    this.muscleService.getDiagnoseResult(this.selectedNodes.filter(e => !e.children || e.children.length == 0).map(e => e.data.id)).subscribe(
      e => {
        this.selectedNodes.forEach(e => {
          if (!e.children || e.children.length == 0) {
            // console.log(e);
            this.columns.push({name: e.data.translateName, regionNameAbbreviation: e.parent?.parent?.data.abbreviation});
          }
        })
        e.forEach( dto => {
          // console.log(dto);
          let obj = {} as IValue;
          obj.name = dto.name;
          obj.score = dto.score;
          // obj.symptomsMap = dto.symptomsMap;
          Object.assign(obj, dto.symptomsMap);
          const map1 = new Map<string, string[]>(Object.entries(dto.symptoms));
          obj.symptoms = ""
          map1.forEach((v,k) => {
            obj.symptoms = obj.symptoms + k + ":<br>"
            map1.get(k)?.forEach(v => {
              obj.symptoms = obj.symptoms + "-" + v + "<br>"
            })
            obj.symptoms += "<br>"
          })
          // console.log(obj);
          this.diagResult.push(obj);
        })
        this.tableReady = true;
      }
    )
  }
}
