import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { myLeavesInterface } from "@/types/applyLeave"


interface myLeavesProps {
  leaveDataProps: myLeavesInterface[]; 
}

const LeaveStausTables:React.FC<myLeavesProps> = ({leaveDataProps}) => {

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Leave Type</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead className="text-center">Days</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center"> Action By</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveDataProps?.map((leave) => (
            <TableRow key={leave?.leave_request_id}>
              <TableCell className="font-medium">{leave?.leave_type}</TableCell>
              <TableCell>{leave?.start_date?.split("T")[0]}</TableCell>
              <TableCell>{leave?.end_date?.split("T")[0]}</TableCell>
              <TableCell className="text-center">{leave?.total_days}</TableCell>
              <TableCell className={ leave?.status === "approved" ? "text-[#018AFF] text-center" : leave?.status=="rejected" ? "text-red-500 text-center": "text-black text-center" }>{leave?.status}</TableCell>
              <TableCell className="text-center">{leave?.action_by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LeaveStausTables
