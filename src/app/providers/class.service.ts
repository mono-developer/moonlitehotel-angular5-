import { Injectable } from '@angular/core';
import { Class } from '../develop-classes/class';

@Injectable()
export class ClassService {
  personClasses: Class[] = [
    {
      id: 'a44fca', name: 'Talent Development', group: 'HR', type: 'Results through Relationships', date: [
        {start: '2017-07-12T09:30:00-04:00', end: '2017-07-12T10:30:00-04:00'}
      ], location: 'New York, NY', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    },
    {
      id: 'a44fcb', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
        {start: '2017-10-01T09:30:00-04:00', end: '2017-10-01T14:00:00-04:00'},
        {start: '2017-10-11T10:30:00-04:00', end: '2017-10-11T11:30:00-04:00'}
      ], location: 'Dallas, TX', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    },
    {
      id: 'a44fcd', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
        {start: '2018-07-11T09:30:00-04:00', end: '2018-07-11T14:00:00-04:00'}
      ], location: 'Dallas, TX', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    }
  ];
  virtualClasses: Class[] = [
    {
      id: 'a44fca', name: 'Talent Development', group: 'HR', type: 'Results through Relationships', date: [
        {start: '2017-07-12T09:30:00-04:00', end: '2017-07-12T10:30:00-04:00'}
      ], location: 'virtual', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    },
    {
      id: 'a44fcb', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
        {start: '2017-10-01T09:30:00-04:00', end: '2017-10-01T14:00:00-04:00'},
        {start: '2017-10-11T10:30:00-04:00', end: '2017-10-11T11:30:00-04:00'}
      ], location: 'virtual', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    },
    {
      id: 'a44fcd', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
        {start: '2018-07-11T09:30:00-04:00', end: '2018-07-11T14:00:00-04:00'}
      ], location: 'virtual', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    }
  ];

  constructor() { }

  getClassById(id: string, category: string) {
    let selectedClass;
    if (category === 'in-person') {
      selectedClass = this.personClasses.find((item: Class) => item.id === id);
    } else {
      selectedClass = this.virtualClasses.find((item: Class) => item.id === id);
    }
    return selectedClass;

  }

  getClasses(category: string) {
    if (category === 'person') {
      return this.personClasses;
    } else {
      return this.virtualClasses;
    }
  }

}
