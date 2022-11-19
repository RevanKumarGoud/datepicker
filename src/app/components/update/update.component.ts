import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { users } from 'src/app/User';
import { UserFetch } from '../drop-down/userFetch';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  val:any;
  users:users[] =[];
  Users!: UserFetch;
  constructor(public route:ActivatedRoute,public router: Router,public service:RestService) { }
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    })
    console.log("id" + this.val)
    this.service.getUpdateUsers(this.val).subscribe(data => {
      this.Users = data;
    })
  }
  update(){
    this.service.UpdateUsers(this.Users).subscribe(data => {
    });
    this.getUsers()
    this.router.navigate(['home'])
  }
  getUsers() {
    this.service.getUsers().subscribe((Response) => {
      this.users = Response;
    })
  }

}
