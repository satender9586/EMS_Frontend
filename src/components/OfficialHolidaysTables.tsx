
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { officialHolidayInterface } from "@/types/holiday";
import { Button } from "./ui/button";

interface officialHolidayTableInterface {
  officialHolidays: officialHolidayInterface[],
  isAdminTable: boolean,
  deleteHolidayHandler: any
}

const OfficialHolidaysTables: React.FC<officialHolidayTableInterface> = ({ officialHolidays, isAdminTable = false, deleteHolidayHandler }) => {

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Holiday Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead >Start Date</TableHead>
            <TableHead className="text-center">End Date</TableHead>
            {
              isAdminTable && <TableHead className="text-center">Action</TableHead>
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {officialHolidays?.map((holiday: officialHolidayInterface, index) => (
            <TableRow key={holiday?.holiday_id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{holiday?.holiday_name}</TableCell>
              <TableCell>{holiday?.description}</TableCell>
              <TableCell >{holiday?.start_date?.split("T")[0]}</TableCell>
              <TableCell className="text-center">{holiday?.end_date?.split("T")[0]}</TableCell>
              {
                isAdminTable && <TableCell onClick={() => deleteHolidayHandler(holiday?.holiday_id)} className="text-center"><Button className="bg-gradient-to-r text-red-500 from-white via-blue-50 to-blue-100 p-0 min-h-0 max-h-0 px-2 py-2.5 text-[10px] font-normal" variant={"outline"}>Delete</Button></TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OfficialHolidaysTables
