
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { officialHolidayInterface } from "@/types/holiday";
import { MdDelete } from "react-icons/md";


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
            <TableHead className="font-serif">S.No</TableHead>
            <TableHead className="font-serif">Holiday Name</TableHead>
            <TableHead className="font-serif">Description</TableHead>
            <TableHead className="font-serif">Start Date</TableHead>
            <TableHead className="text-center font-serif">End Date</TableHead>
            {
              isAdminTable && <TableHead className="text-center font-serif">Action</TableHead>
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {officialHolidays?.map((holiday: officialHolidayInterface, index) => (
            <TableRow key={holiday?.holiday_id} className="font-sans">
              <TableCell className="font-sans">{index + 1}</TableCell>
              <TableCell className="font-sans ">{holiday?.holiday_name}</TableCell>
              <TableCell className="font-sans">{holiday?.description}</TableCell>
              <TableCell className="font-sans">{holiday?.start_date?.split("T")[0]}</TableCell>
              <TableCell className="text-center">{holiday?.end_date?.split("T")[0]}</TableCell>
              {
                isAdminTable && <TableCell onClick={() => deleteHolidayHandler(holiday?.holiday_id)} className="flex justify-center items-center"><MdDelete className="text-center text-red-600 text-2xl"/></TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OfficialHolidaysTables
