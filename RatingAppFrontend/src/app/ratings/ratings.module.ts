import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { RatingListComponent } from './rating-list/rating-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';


import { NgxStarRatingModule } from 'ngx-star-rating';







@NgModule({
  declarations: [
    RatingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule,
    NgxStarRatingModule,
    MatBadgeModule
  ],
  exports:[
    RatingListComponent
  ]
})
export class RatingsModule { }
