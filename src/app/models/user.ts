export interface FacilitatorUser {
  type: string;
  name: string;
  job_title: string;
  region: string;
  email: string;
  phone: string;
  profile?: string;
}

export interface Status {
  type: string;
  date: string;
}

export class InboxUser {
  id: string;
  avatarImageUrl: string;
  firstName: string;
  lastName: string;
  statuses: Status[];
  shortStatuses?: Status[];
  lastStatusDate?: string;
}
