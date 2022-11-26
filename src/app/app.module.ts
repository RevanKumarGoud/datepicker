import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { DatePipe } from "@angular/common";
import  {FilterDatePipe} from './filter-date.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterDatePipe,
    DropDownComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DatePipe,
    Ng2OrderModule,
    NgSelectModule,
      
  
  ],
  providers: [DatePipe,FilterDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
