import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ActionFieldInterface {
  callback: (id: string, value: string) => void;
  id: string;
  isAdmin: any,
  status:string
}

const SelectOptionFieldForAdmin: React.FC<ActionFieldInterface> = ({ callback, id, isAdmin,status }) => {

  const changeHandler = (value: string) => {
    callback(id, value);
  };

  return (
    <Select onValueChange={changeHandler}>
      <SelectTrigger className="w-[140px] text-center">
        <SelectValue placeholder="Take action" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel >Status</SelectLabel>
          {
            isAdmin ? <>
              {/* <SelectItem    value="rejected">Rejected</SelectItem>
               <SelectItem value="approved">Approved</SelectItem>   
            </> :<SelectItem   value="cancelled">Cancelled</SelectItem> */}
              <SelectItem  disabled={status==="cancelled"  || status==="approved"}  value="rejected">Rejected</SelectItem>
               <SelectItem disabled={status==="cancelled"  || status==="approved"} value="approved">Approved</SelectItem>   
            </> :<SelectItem disabled={status==="cancelled" || status==="approved"}  value="cancelled">Cancelled</SelectItem>
          } 
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOptionFieldForAdmin;
