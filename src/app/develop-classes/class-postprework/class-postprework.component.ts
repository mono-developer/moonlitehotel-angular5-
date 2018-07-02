import { Component, OnInit } from '@angular/core';
import { Class, Work } from '../class';
import { ClassService } from '../../providers/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-postprework',
  templateUrl: './class-postprework.component.html',
  styleUrls: ['./class-postprework.component.scss']
})
export class ClassPostpreworkComponent implements OnInit {
  class: Class;
  category: string;
  id: string;
  preworks: Work[];
  headerTitle: string;
  isAlert: boolean = false;
  isUpcoming: boolean = false;

  constructor(private classService: ClassService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.id = this.route.snapshot.paramMap.get('id');
    this.class = this.classService.getClassById(this.id, this.category);
    this.preworks = [
      {title: 'account_edit_profile_tab_reports', active: '<a class="active-item">Download</a>',
      content1: '', content2: 'develop_pre_work_complete_sdi2'},
      {title: 'common_text_evaluations', active: '<a class="active-item complete-class">Complete</a>',
      content1: '', content2: 'develop_complete_class_evaluation_free_guest_sdi'}
    ];
    this.getHeaderTitle();
  }
  trackByIndex(index: number) {
    return index;
  }

  getHeaderTitle() {
    this.isUpcoming = this.getUpcoming(this.class.date[0].start);
    if (this.isUpcoming) {
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

  onCloseAlert() {
    this.isAlert = false;
  }

  onClickActive(ev: string) {
    if (this.isUpcoming && ev === 'Complete') {
      this.isAlert = true;
    } else {
      console.log('complete');
    }
  }

}
