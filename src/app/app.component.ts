import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { users } from './User';
import { RestService } from './rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'datepicker';
  //pagination
  p: number = 1;
  selectedHeader:any;


  //Datao bject
  public userheader = [{name:'id'}, {name:'Name'}, {name:'Date'} ]
   users: users[] = [
    {
      id: 0,
      Name: '',
      Date: '',
    },
  ];
  order: any;
  isDesc: boolean = false;

  constructor(
    public service: RestService,
    private formBulider: FormBuilder,
    @Inject(LOCALE_ID) public local: string,
    private datePipe: DatePipe
  ) {
  }
 
   usersData:any;
  ngOnInit(): void {
    this.service.getUsers().subscribe((Data) => {
      this.users = Data;
      this.usersData =[...Data]
    });
  }
  //input searching
  search(e:any) {
    if(this.selectedHeader == 'Name'){
      this.users = this.usersData.filter((Data:any) => Data.Name.toLowerCase() === e.target.value);
      return e.target.value
    }
  }
  SearchID(e:any){
    if(this.selectedHeader == 'id'){
      this. users = this.usersData.filter((search:any) => search.id == e.target.value)
    }
  }
  
  searchDate(e:any){
    if(this.selectedHeader === 'Date'){
      
      let date = formatDate(e.target.value, 'dd-MM-yyyy', this.local);

      this.users = this.usersData.filter((item:any) => item.Date === date );
      console.log(date)
    }
  }

  sortId() {
    if (this.order) {
      let newArry = this.users.sort((a, b) => a.id - b.id);
      this.users = newArry;
    } else {
      let newArry = this.users.sort((a, b) => b.id - a.id);
      this.users = newArry;
    }
    this.order = !this.order;
  }

key : string = 'Name';
reverse : boolean = false;
sort(key:any) {
  this.key = key;
  this.reverse = !this.reverse
}
  
  
  changeMethode(e:any){
      this.selectedHeader = e.target.value;
      console.log(e.target.value)
    
   }
   
  


}



