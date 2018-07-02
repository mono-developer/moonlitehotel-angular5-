import { Injectable } from '@angular/core';
import { Facilitator } from '../models/facilitator';

@Injectable()
export class FacilitatorService {
 facilitators: Facilitator[] = [
    {
      id: 'US12247', name: 'Cindy Capello', job_title: 'HR Benefits Admin', profile: 'assets/img/teams/profile.png',
      state: 'PREMIER', rating: 4.35, motives: 'blue', conflicts: 'b_r_g', evalutions_count: 125, trained_count: 17, learners_count: 312,
      toolkits_count: 14, credits_count: 30, certifications: [{name: 'CSA', isVerified: true}, {name: 'CSR', isVerified: true}],
      upcoming_classes: [{
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }],
      previous_classes: [{
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }]
    },
    {
      id: 'US12248', name: 'Frank Brown', job_title: 'Leadership Trainer', profile: 'assets/img/teams/profile2.png',
      state: 'PREMIER', rating: 3.98, motives: 'red_blue', conflicts: 'r_gb', evalutions_count: 125, trained_count: 17,
      learners_count: 312,
      toolkits_count: 14, credits_count: 30, certifications: [{name: 'CSA', isVerified: true}, {name: 'CSR', isVerified: true}],
      upcoming_classes: [{
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }],
      previous_classes: [{
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }]
    },
    {
      id: 'US12249', name: 'Christopher Thompson', job_title: 'Regin Manager', profile: 'assets/img/teams/profile3.png',
      state: 'PREMIER', rating: 2.78,  motives: 'hub', conflicts: 'g_br', evalutions_count: 125, trained_count: 17,
      learners_count: 312,
      toolkits_count: 14, credits_count: 30, certifications: [{name: 'CSA', isVerified: true}, {name: 'CSR', isVerified: true}],
      upcoming_classes: [{
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }],
      previous_classes: [{
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }]
    }
  ];

  constructor() { }

  getFacilitators() {
    return this.facilitators;
  }

  getFacilitatorByid(id: string) {
    return this.facilitators.find((facilitator: Facilitator) => facilitator.id === id);
  }

}
