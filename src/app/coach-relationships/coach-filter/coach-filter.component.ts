import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-filter',
  templateUrl: './coach-filter.component.html',
  styleUrls: ['./coach-filter.component.scss']
})
export class CoachFilterComponent implements OnInit {
  filters: any[] = [];
  classes: any[] = [];
  motives: any[] = [];
  conflict: any[] = [];
  inventories: any[] = [];
  strengths: any[] = [];
  labels: any[] = [];
  topStrengths: any[] = [];

  constructor() { }

  ngOnInit() {
    this.classes = [
      {label: 'train_never_attended_text', checked: true, items: [
        {label: 'account_csa_text_abbr', checked: false},
        {label: 'account_csR_text_abbr', checked: false}
      ]},
      {label: 'train_attended_text', checked: false, items: [
        {label: 'account_csa_text_abbr', checked: false},
        {label: 'account_csR_text_abbr', checked: false}
      ]},
      {label: 'coach_Rescheduling', checked: false, items: [
        {label: 'account_csa_text_abbr', checked: false},
        {label: 'account_csR_text_abbr', checked: false}
      ]},
    ];
    this.motives = [{ label: 'directory_blue_text', checked: true},
      {label: 'directory_red_text', checked: false},
      {label: 'directory_green_text', checked: false},
      {label: 'train_hub_text', checked: false},
      {label: 'train_red_blue', checked: false},
      {label: 'train_red_green', checked: false},
      {label: 'train_blue_green', checked: false}
    ];
    this.conflict = [{ label: 'train_b_r_g_text', checked: true},
      {label: 'train_g_r_b_text', checked: false},
      {label: 'train_b_g_r_text', checked: false},
      {label: 'train_g_br_text', checked: false},
      {label: 'train_b_rg_text', checked: false},
      {label: 'train_br_g_text', checked: false},
      {label: 'train_r_b_g_text', checked: false},
      {label: 'train_rg_b_text', checked: false},
      {label: 'train_r_g_b_text', checked: false},
      {label: 'train_bg_r_text', checked: false},
      {label: 'train_r_bg_text', checked: false},
      {label: 'train_brg_text', checked: false},
      {label: 'train_g_b_r_text', checked: false}
    ];
    this.inventories = [
      {label: 'navigation_sdi_20', checked: true},
      {label: 'train_360_feedback', checked: false},
      {label: 'navigation_role_expectations', checked: false},
    ];

    this.labels = [
      {label: 'train_label_1', checked: true},
      {label: 'train_label_1', checked: false},
      {label: 'train_label_1', checked: false},
      {label: 'train_label_1', checked: false},
      {label: 'train_label_1', checked: false},
      {label: 'train_label_1', checked: false}
    ];
    this.topStrengths = [
      {label: 'compare_select_strength', checked: false, items: [
        {label: 'compare_select_strength', checked: false},
        {label: 'compare_select_strength', checked: false},
      ]},
      {label: 'compare_select_strength', checked: false, items: [
        {label: 'compare_select_strength', checked: false},
        {label: 'compare_select_strength', checked: false},
      ]},
      {label: 'compare_select_strength', checked: false, items: [
        {label: 'compare_select_strength', checked: false},
        {label: 'compare_select_strength', checked: false},
      ]},
    ];
  }

  onCheckFilter(item: any) {
    item.checked = !item.checked;
  }

  onRadioFilter(item: any) {
    this.classes = this.classes.map((classItem: any) => {
      if (item.label === classItem.label) {
        classItem.checked = true;
      } else {
        classItem.checked = false;
      }
      return classItem;
    });
  }
  onRadioInventories(item: any) {
    this.inventories = this.inventories.map((inventory: any) => {
      if (item.label === inventory.label) {
        inventory.checked = true;
      } else {
        inventory.checked = false;
      }
      return inventory;
    });
  }

  trackByIndex(index: number) {
    return index;
  }

}
