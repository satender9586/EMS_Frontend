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
}

const SelectOptionFieldForAdmin: React.FC<ActionFieldInterface> = ({ callback, id }) => {

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
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="Approved">Approved</SelectItem>
          <SelectItem value="Rejected">Rejected</SelectItem>
          <SelectItem value="Cancelled">Cancelled</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOptionFieldForAdmin;
