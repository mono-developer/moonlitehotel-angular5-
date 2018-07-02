import { Component, OnInit } from '@angular/core';
import { Class, Work } from '../class';
import { ClassService } from '../../providers/class.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-prework',
  templateUrl: './class-prework.component.html',
  styleUrls: ['./class-prework.component.scss']
})
export class ClassPreworkComponent implements OnInit {
  class: Class;
  category: string;
  id: string;
  prework: Work;
  headerTitle: string;
  constructor(private classService: ClassService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.id = this.route.snapshot.paramMap.get('id');
    this.class = this.classService.getClassById(this.id, this.category);
    this.prework = {title: 'develop_pre_work_text', active: '<a class="active-item">Complete the SDI 2.0</a>',
      content1: 'develop_pre_work_complete_sdi1', content2: 'develop_pre_work_complete_sdi2'};
    this.getHeaderTitle();
  }

  gotoPostPreWork() {
    this.router.navigate( [`develop-classes/postprework/${this.category}/${this.id}`]);
  }

  getHeaderTitle() {
    const isUpcoming = this.getUpcoming(this.class.date[0].start);
    if (isUpcoming) {
      if (this.category === 'in-person') {
        this.headerTitle = 'develop_upcoming_in_person_class';
      } else {
        this.headerTitle = 'develop_upcoming_virtual_class';
      }
    } else {
      if (this.category === 'in-person') {
        this.headerTitle = 'train_in_person_class';
      } else {
        this.headerTitle = 'train_virtual_class';
      }
    }
  }

  getUpcoming(date: string) {
    const today = new Date();
    const classDate = new Date(date);
    return classDate > today;
  }

}
