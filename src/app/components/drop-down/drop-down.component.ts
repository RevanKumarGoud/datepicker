import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { users } from 'src/app/User';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UserFetch } from './userFetch';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  p: number = 1;
  selectedHeader:any;
  displayNotification = false;
  usersData:any;
  isDesc: boolean = true;
  order: any;
  //Datao bject
  public userheader = [{name:'id'}, {name:'Name'}, {name:'Date'} ]
   users: users[] = [];

  Users!: UserFetch;
  constructor(
    public service: RestService,
    private formBulider: FormBuilder,
    @Inject(LOCALE_ID) public local: string,
  private router : Router
  ) {}
 
formvalue!:FormGroup
  ngOnInit(): void {
    this.service.getUsers().subscribe((Data) => {
      this.users = Data;
      this.usersData =[...Data];
    });
    this.add()
  }
  //input searching
  search(e:any) {
    this.displayNotification = false;
    if(this.selectedHeader === 'id') {
      this.users = this.usersData.filter((search:any) => search.id == e.target.value)
    }
     else if (this.selectedHeader == 'Name'){
      this.users = this.usersData.filter((Data:any) => Data.Name.toLowerCase() === e.target.value);
    }
    else if (this.selectedHeader === 'Date') {
      let date = formatDate(e.target.value, 'dd-MM-yyyy', this.local);
      this.users = this.usersData.filter((item:any) => item.Date === date );
    }
    if(this.users.length === 0){
      this.displayNotification = true
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

key : string = 'id';
reverse : boolean = false;
sort(key:any) {
  this.key = key;
  this.reverse = !this.reverse
}
  
  
  changeMethode(e:any){
      this.selectedHeader = e.target.value;
      console.log(e.target.value)
    
   }
   
   deleteRow(val: any){
     if(confirm("Are you sure to delete")){
     this.service.deleteUser(val).subscribe(data => {
       });
       this.service.getUsers().subscribe((Response) => {
        this.users = Response;
       })
   }
  }
  update(id:any) {
    this.router.navigate(['update',id])
  }
 
  add(){
    this.service.AddUsers(this.Users).subscribe(data => {
      this.Users! = data
      this.getUsers()
      console.log(this.Users);
    });
  }
  getUsers() {
    this.service.getUsers().subscribe((data) => {
      this.users = data;

    })
  }

}
