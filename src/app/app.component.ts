import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { users } from './User';
import { RestService } from './rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  DatePipe, formatDate } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'datepicker';

  
}



