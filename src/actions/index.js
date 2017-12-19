export const CHANGE_ORDER = "CHANGE_ORDER";
export const ASC = 'asc';
export const DSC = 'dsc';

export function changeOrder() {
  return {
    type: CHANGE_ORDER    
  };
}