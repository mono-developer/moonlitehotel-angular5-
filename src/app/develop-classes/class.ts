export interface Facilitator {
  name: string;
  title: string;
  motive: string;
  conflict: string;
  categories?: string[];
  profile?: string;
}
export interface ClassDate {
  start: string;
  end: string;
}
export interface Class {
  id?: string;
  name: string;
  group: string;
  type?: string;
  date: ClassDate[];
  location: string;
  language?: string;
  prework?: string;
  facilitator?: Facilitator;
}

export interface Session {
  id?: string;
  date: string;
  title: string;
  description?: string;
  recording?: string;
}

export interface Work {
  title: string;
  active: string;
  content1?: string;
  content2: string;
}
