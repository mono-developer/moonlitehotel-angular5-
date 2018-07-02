import { Component, OnInit } from '@angular/core';
import { FilterItem, FilterItemGroup } from '../../models/filter-item-group';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filters: FilterItemGroup[];
  constructor() { }

  ngOnInit() {
    this.filters = [
      { title: 'Inventory', filterItems:
        [{ label: 'SDI 2.0 Invitation', checked: true},
          {label: 'SDI 2.0 Reminder', checked: false},
          {label: '360° Feedback Invitation', checked: false},
          {label: '360° Feedback Reminder', checked: false},
          {label: 'Role Exception Invitation', checked: false},
          {label: 'Role Exception Reminder', checked: false}
        ]
      },
      { title: 'Training', filterItems:
        [{ label: 'Class Invitation', checked: true},
          {label: 'Class Pre-Work Reminder', checked: false},
          {label: 'Class Evalutation Reminder', checked: false}
        ]
      },
      { title: 'Coach', filterItems:
        [{ label: 'Coaching Invitation', checked: true},
          {label: 'Coaching Reminder', checked: false},
          {label: 'Development Path', checked: false}
        ]
      }
    ];
  }

  onCheckFilter(item: FilterItem) {
    item.checked = !item.checked;
  }

  trackByIndex(index: number) {
    return index;
  }

}
