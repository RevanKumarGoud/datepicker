import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { users } from './User';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor( private http:HttpClient) { }

  url:string = "http://localhost:3000/Users"
  getUsers(){
    console.log(this.url)
    return this.http.get<users[]>(this.url)
  }

}
