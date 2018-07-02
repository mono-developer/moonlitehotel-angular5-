export interface User {
  firstName: string;
  lastName: string;
  title: string;
  mvs: string;
  role?: string;
  coach?: User | string;
  profile?: string;
  checked?: boolean;
}

export interface Config {
  coachVisible: boolean;
  actionBtnText?: string;
  userBtn?: string;
  contextMenu?: boolean;
  isAlphaBet?: boolean;
  isPagination?: boolean;
  headerTitle?: string;
  filterPlaceholderTxt?: string;
  isRelationShipBtn?: boolean;
  pageName?: string;
  org?: string;
}
