import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { myLeavesInterface } from "@/types/applyLeave"
import SelectOptionFieldForAdmin from "./SelectOptionFieldForAdmin";
import { wordCapitalize } from "@/utils/Methods";



interface myLeavesProps {
  leaveDataProps: myLeavesInterface[];
  callback: any,
  showAction: boolean
}

const LeaveStausTables: React.FC<myLeavesProps> = ({ leaveDataProps, callback, showAction }) => {

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="font-serif">Type </TableHead>
            <TableHead className="font-serif">Start Date</TableHead>
            <TableHead className="font-serif">End Date</TableHead>
            <TableHead className="text-center font-serif">Days</TableHead>
            <TableHead className="text-center font-serif">Status</TableHead>
            <TableHead className="text-center font-serif"> Action By</TableHead>
            {
              showAction && <>

                <TableHead className="text-center font-serif"> Action </TableHead>
              </>
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveDataProps?.map((leave) => (
            <TableRow key={leave?.leave_request_id}>
              <TableCell className="font-sans">{wordCapitalize(leave?.leave_type)}</TableCell>
              <TableCell className="font-sans">{leave?.start_date}</TableCell>
              <TableCell className="font-sans">{leave?.end_date}</TableCell>
              <TableCell className="font-sans text-center min-w-[200px]">{leave?.total_days}</TableCell>
              <TableCell className={leave?.status === "approved" ? "text-[#018AFF] text-center font-sans" : leave?.status == "rejected" ? "text-red-500 text-center" : "text-black text-center"}>{leave?.status}</TableCell>
              <TableCell className="text-center min-w-[150px] font-sans">{leave?.action_by}</TableCell>
              {
                showAction && <>
                  <TableCell className="flex justify-center font-sans">
                    <SelectOptionFieldForAdmin isAdmin={false} callback={callback} id={leave?.leave_request_id} status={leave?.status} />
                  </TableCell>
                </>
              }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LeaveStausTables
