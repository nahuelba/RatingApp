import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './home/title/title.component';
import { RatingListComponent } from './ratings/rating-list/rating-list.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: "full",
  },
  {
    path: "ratings",
    component:  RatingListComponent,
    
  },
  {
    path: '**',
    component: TitleComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
