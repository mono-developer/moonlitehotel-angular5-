export interface FilterItem {
  label: string;
  checked: boolean;
}
export interface FilterItemGroup {
  title: string;
  filterItems: FilterItem[];
}
