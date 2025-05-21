   
//******************************** ORGANIZATION > ADD NEW EMPLOYEE  */
 
export interface BasicInputFieldsInterface {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "select" | "number" | "email" | "password" | "date";
  options?: string[];
}