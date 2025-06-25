import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { myLeavesInterface } from "@/types/applyLeave"
import SelectOptionFieldForAdmin from "./SelectOptionFieldForAdmin";
import { getDiffInTwoDates } from "@/utils/Methods";

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
            <TableHead className="font-serif">EmployeeId</TableHead>
            <TableHead className="font-serif">Leave Type</TableHead>
            <TableHead className="font-serif">Start Date</TableHead>
            <TableHead className="font-serif">End Date</TableHead>
            <TableHead className="text-center font-serif">Days</TableHead>
            <TableHead className="text-end pr-5 font-serif">Status</TableHead>
            <TableHead className="text-end pr-15 font-serif">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveDataProps?.map((leave) => (
            <TableRow key={leave?.leave_request_id}>
              <TableCell className="font-sans">{leave?.employee_id}</TableCell>
              <TableCell className="font-sans">{leave?.leave_type}</TableCell>
              <TableCell className="font-sans">{leave?.start_date}</TableCell>
              <TableCell className="font-sans">{leave?.end_date}</TableCell>
              <TableCell className="text-center font-sans">{getDiffInTwoDates(leave?.start_date,leave?.end_date)}</TableCell>
              <TableCell className={
                leave?.status === "approved"
                  ? "text-[#32b751] text-end font-sans"
                  : (leave?.status === "rejected" || leave?.status === "cancelled")
                    ? "text-red-500 text-end font-sans"
                    : "text-black text-end font-sans"
              }>
                {leave?.status}
              </TableCell>
              <TableCell className="flex justify-end w-full font-sans">
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
