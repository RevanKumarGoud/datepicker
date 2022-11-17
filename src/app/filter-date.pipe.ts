import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { users } from "./User";

@Pipe({
  name: "filterDate"
})
export class FilterDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  
  transform(_Users: users[], search: string): users[] {
    return users.filter((Date: string | number | Date)  =>
        this.datePipe.transform(Date, 'dd-MM-yyyy')?.includes(search) );

  }

}
