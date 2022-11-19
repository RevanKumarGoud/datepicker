import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { users } from './User';
import {  Observable } from 'rxjs';
import { UserFetch } from './components/drop-down/userFetch';
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class RestService {
header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json')
httpOptions = {
  headers:this.header
}
  constructor( private http:HttpClient) { }

  url:string = "http://localhost:3000/Users";
  getUsers(){
    console.log(this.url)
    return this.http.get<users[]>(this.url)
  }
 deleteUser(id:number):Observable<users> {
   const url = `${this.url}/${id}`;
   return this.http.delete<users>(url,this.httpOptions)
 }
 getUpdateUsers(id:number):Observable<users> {
  const url = `${this.url}/${id}`;
   return this.http.get<users>(url,this.httpOptions)
 }
 UpdateUsers(users:UserFetch):Observable<users> {
  const url = `${this.url}/${users.id}`;
   return this.http.put<users>(url,users,this.httpOptions).pipe(
    map(() => users)
   )
 }

}
