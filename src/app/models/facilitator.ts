export interface CertificationClass {
  type: string;
  name: string;
  group_name: string;
  location: string;
  date: string;
  count: number;
  incompleted: number;
}

export interface Certification {
  name: string;
  isVerified: boolean;
}

export interface Facilitator {
  id: string;
  name: string;
  profile?: string;
  job_title: string;
  state: string; // premier
  rating: number;
  motives?: string;
  conflicts?: string;
  evalutions_count: number;
  trained_count: number;
  learners_count: number;
  toolkits_count: number;
  credits_count: number;
  certifications: Certification[];
  upcoming_classes: CertificationClass[];
  previous_classes: CertificationClass[];
}
