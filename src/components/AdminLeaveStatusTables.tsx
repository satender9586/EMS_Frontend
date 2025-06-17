import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { myLeavesInterface } from "@/types/applyLeave"
import SelectOptionFieldForAdmin from "./SelectOptionFieldForAdmin";
import { getDiffInTwoDates } from "@/utils/methods";

interface myLeavesProps {
  leaveDataProps: myLeavesInterface[];
  callback: any;
}

const AdminLeaveStatusTables: React.FC<myLeavesProps> = ({ leaveDataProps, callback }) => {

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>EmployeeId</TableHead>
            <TableHead>Leave Type</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead className="text-center">Days</TableHead>
            <TableHead className="text-end pr-5">Status</TableHead>
            <TableHead className="text-end pr-15">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveDataProps?.map((leave) => (
            <TableRow key={leave?.leave_request_id}>
              <TableCell className="font-medium">{leave?.employee_id}</TableCell>
              <TableCell className="font-medium">{leave?.leave_type}</TableCell>
              <TableCell>{leave?.start_date}</TableCell>
              <TableCell>{leave?.end_date}</TableCell>
              <TableCell className="text-center">{getDiffInTwoDates(leave?.start_date,leave?.end_date)}</TableCell>
              <TableCell className={
                leave?.status === "approved"
                  ? "text-[#32b751] text-end"
                  : (leave?.status === "rejected" || leave?.status === "cancelled")
                    ? "text-red-500 text-end"
                    : "text-black text-end"
              }>
                {leave?.status}
              </TableCell>
              <TableCell className="flex justify-end w-full">
                <SelectOptionFieldForAdmin isAdmin={true} callback={callback} id={leave?.leave_request_id} status={leave?.status}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminLeaveStatusTables
