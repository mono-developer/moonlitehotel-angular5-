import { Injectable } from '@angular/core';
import { User } from '../coach-relationships/user';

@Injectable()
export class CoachServiceService {

  constructor() { }

  getCoaches(page: string) {
    let users: User[] = [];
    switch (page) {
      case 'coachroster': {
        users = [
          {firstName: 'Kent', lastName: 'Washington', mvs: 'red_blue', title: 'Chief Councel',
          role: 'coach', profile: 'assets/img/teams/profile.png'},
          {firstName: 'Mark', lastName: 'Logan', mvs: 'red', title: 'Structure Engineer',
          role: 'coach', profile: 'assets/img/teams/profile.png'},
          {firstName: 'Victoria', lastName: 'Patel', mvs: 'red_blue', title: 'Director',
          role: 'coach', profile: 'assets/img/teams/profile.png'},
        ];
        break;
      }
      case 'coachinvitation': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile2.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile3.png', coach: ''}
        ];
        break;
      }
      case 'coachreminder': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile2.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile3.png', coach: ''}
        ];
        break;
      }
      case 'coacharchive': {
        users = [
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red_green', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'blue', title: 'Project Coacht',
          profile: 'assets/img/teams/profile2.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile3.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile4.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile5.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile2.png', coach: ''}
        ];
        break;
      }
      case 'orgroster': {
        users = [
          {firstName: 'Vince', lastName: 'Park', mvs: 'red_green', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile2.png', coach: '', role: 'coach'},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile3.png', coach: '', role: 'coach'},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile4.png', coach: '', role: 'coach'},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile5.png', coach: '', role: 'coach'},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'}
        ];
        break;
      }
      case 'orginvitation': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'orgreminder': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'orgarchive': {
        users = [
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red_green', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'blue', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'org_adminroster': {
        users = [
          {firstName: 'Vince', lastName: 'Park', mvs: 'red_green', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: '', role: 'coach'}
        ];
        break;
      }
      case 'org_admininvitation': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'org_adminreminder': {
        users = [
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'blue', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'red', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'org_adminarchive': {
        users = [
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'red_green', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'blue', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: ''}
        ];
        break;
      }
      case 'coachmember': {
        users = [
          {firstName: 'Susan', lastName: 'Anderson', mvs: 'HUB', title: 'Director of HR',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Janice', lastName: 'Lee', mvs: 'blue_green', title: 'Recruiting Manager',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Mark', lastName: 'Logan', mvs: 'green', title: 'Structural Engineer',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Victoria', lastName: 'Patel', mvs: 'red', title: 'Director',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Amy', lastName: 'Chang', mvs: 'blue', title: 'Account Executive',
          profile: 'assets/img/teams/profile.png', coach: 'Cindy Capello'},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'blue_red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'red_green', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: ''},
        ];
        break;
      }
      case 'orgmember': {
        users = [
          {firstName: 'Susan', lastName: 'Anderson', mvs: 'HUB', title: 'Director of HR',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Janice', lastName: 'Lee', mvs: 'blue_green', title: 'Recruiting Manager',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Mark', lastName: 'Logan', mvs: 'green', title: 'Structural Engineer',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Victoria', lastName: 'Patel', mvs: 'red', title: 'Director',
          profile: 'assets/img/teams/profile.png', coach: 'Kent Washington'},
          {firstName: 'Amy', lastName: 'Chang', mvs: 'blue', title: 'Account Executive',
          profile: 'assets/img/teams/profile.png', coach: 'Cindy Capello'},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'blue_red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'red_green', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: ''},
        ];
        break;
      }
      case 'org_adminmember': {
        users = [
          {firstName: 'Kent', lastName: 'Washington', mvs: 'red_blue', title: 'Chief Councel',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Janice', lastName: 'Lee', mvs: 'blue_green', title: 'Recruiting Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Mark', lastName: 'Logan', mvs: 'green', title: 'Structural Engineer',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Victoria', lastName: 'Patel', mvs: 'red', title: 'Director',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Amy', lastName: 'Chang', mvs: 'blue', title: 'Account Executive',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Curtis', lastName: 'Thompson', mvs: 'blue_red', title: 'Vice President',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Vince', lastName: 'Park', mvs: 'red_green', title: 'Project Coacht',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Ella', lastName: 'Lewis', mvs: 'blue', title: 'Marketing Manager',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Chloe', lastName: 'Davis', mvs: 'red', title: 'Customer Quality Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Steve', lastName: 'Patterson', mvs: 'HUB', title: 'HR Specialist',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Cindy', lastName: 'Capello', mvs: 'blue', title: 'HR Benefits Admin',
          profile: 'assets/img/teams/profile.png', coach: ''},
          {firstName: 'Alice', lastName: 'Park', mvs: 'blue_green', title: 'Recruiter',
          profile: 'assets/img/teams/profile.png', coach: ''},
        ];
        break;
      }
    }
    return users;
  }

}
