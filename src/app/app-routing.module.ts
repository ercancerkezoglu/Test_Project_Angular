import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultscreenComponent } from './components/resultscreen/resultscreen.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:SearchComponent},
  {path:"resultscreen", component:ResultscreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
