import { Component } from '@angular/core';
import {TreeNode} from "primeng/api";
import {Tree} from "primeng/tree";

@Component({
  selector: 'app-functional-chart',
  templateUrl: './functional-chart.component.html',
  styleUrls: ['./functional-chart.component.scss']
})
export class FunctionalChartComponent {
  header: string = "";
  dialogVisible: boolean = false;
  data: TreeNode[] = [
    {
      label: 'Podstawa funkcjonalna',
      expanded: true,
      data: 'ar',
      children: [
        {
          label: 'Mobilność',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Rotacja zewnętrzna',
              data: 'ar'
            },
            {
              label: 'Rotacja wewnętrzna',
              data: 'hr'
            }
          ]
        },
        {
          label: 'Stabilność',
          expanded: true,
          data: 'fr',
          children: [
            {
              label: 'Przy wypchnięciu',
              data: 'fr'
            },
            {
              label: 'Antyrotacyjna',
              expanded: true,
              data: 'ma',
              children: [
                {
                  label: 'Aktywacja brzucha',
                  data: 'fr'
                },
                {
                  label: 'Świadomość tułowia',
                  data: 'ma'
                },
                {
                  label: 'Transfer siły z nóg do rąk',
                  data: 'ma'
                }
              ]
            }
          ]
        },
        {
          label: 'Wzorce ruchowe',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Przysiad',
              data: 'ar'
            },
            {
              label: 'Wykrok',
              data: 'hr',
              expanded: true,
              children: [
                {
                  label: 'Przysiady z gumą',
                  data: 'ar'
                },
                {
                  label: 'Aktywacja poślada',
                  data: 'ar'
                },
              ]
            }
          ]
        },
      ]
    }
  ];

  openDialog(node: TreeNode) {
    if (node.label) {
      this.header = node.label;
    }
    this.dialogVisible = true;
  }
}
