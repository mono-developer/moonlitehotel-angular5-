import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../class';
import { ClassService } from '../../providers/class.service';
@Component({
  selector: 'app-class-tabs',
  templateUrl: './class-tabs.component.html',
  styleUrls: ['./class-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassTabsComponent implements OnInit {
  personClasses: Class[] = [];
  virtualClasses: Class[] = [];
  constructor(private classSerive: ClassService, private router: Router) { }

  ngOnInit() {
    this.personClasses = this.classSerive.getClasses('person');
    this.virtualClasses = this.classSerive.getClasses('virtual');
  }
  gotoClassDetail(id: number, category: string) {
    this.router.navigate( [`develop-classes/${category}/${id}`]);
  }

}
