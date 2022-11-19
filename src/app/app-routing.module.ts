import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: 'home', component:DropDownComponent},
  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
