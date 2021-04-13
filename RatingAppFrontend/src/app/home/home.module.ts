import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { TitleComponent } from './title/title.component';
import { ButtonsComponent } from './buttons/buttons.component'; 





@NgModule({
  declarations: [
    TitleComponent,
    ButtonsComponent
  ],
  exports:[
    TitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxStarRatingModule
    

  ]
})
export class HomeModule { }
