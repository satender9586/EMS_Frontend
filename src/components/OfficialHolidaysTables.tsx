
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { officialHolidayInterface } from "@/types/holiday";

interface officialHolidayTableInterface {
    officialHolidays : officialHolidayInterface[]
}

const OfficialHolidaysTables:React.FC<officialHolidayTableInterface> = ({officialHolidays}) => {

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {officialHolidays?.map((holiday:officialHolidayInterface,index) => (
            <TableRow key={holiday?.holiday_id}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell className="font-medium">{holiday?.holiday_name}</TableCell>
              <TableCell>{holiday?.description}</TableCell>
              <TableCell >{holiday?.start_date?.split("T")[0]}</TableCell>
              <TableCell className="text-center">{holiday?.end_date?.split("T")[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OfficialHolidaysTables
