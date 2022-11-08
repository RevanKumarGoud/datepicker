import { Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { users } from './User';
import { RestService } from './rest.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datepicker';
  //pagination
   p: number = 1;
  
   Date :any;
   //Datao bject
  users:users[] =[
    {
      id: 0,
    Name: '',
    Date: '',
    
    }
  ];
  order: any;

  constructor(public service:RestService, private formBulider :FormBuilder , @Inject(LOCALE_ID) public local:string) {

  }
  ngOnInit(): void {
    this.service.getUsers().subscribe((Data) => {
      this.users=Data
    })
  }
//input searching
search(){
   if(this.Date == "") {
    this.ngOnInit();
   }else{
   let date = formatDate(this.Date,'dd-MM-yyyy',this.local)
   this.users = this.users.filter(Data => Data.Date === date)
  }
}
//Sorting
// key:string = 'id';
// row:boolean = false;
// sort(key: string){
//   this.key = key;
//   this.row = !this.row

sortId() {
  if(this.order) {
    let newArry =this.users.sort((a,b) =>a.id - b.id);
    this.users = newArry
  }else{
    let newArry =this.users.sort((a,b) => b.id -a.id);
    this.users = newArry
  }
  this.order = !this.order
}
}

