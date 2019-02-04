import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./componenet/home/home.component";
import {FooterComponent} from "./componenet/footer/footer.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: FooterComponent},
];
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]

  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
