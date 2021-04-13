import { Component, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ButtonsService } from 'src/app/services/buttons.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  

  constructor(private ButtonsService: ButtonsService){}


  @Input() title:string | undefined;

  Fadeout : boolean = false;
  Loading: boolean = false;
  addMessage: boolean = false;
  Buttons: boolean = true;
  message: string = "";
  messageError: string = "";
  rating: number = 3;


  //fadeOut
  displayFadeOut(): string | null{
    return this.Fadeout ? 'animate__animated animate__fadeOut' :null  
  }
  displayFadeIn(): string | null{
    return this.addMessage ?'animate__animated animate__fadeIn' : null 
  }



  UserRating(){
    console.log(this.rating);
    
    this.Fadeout=true

    //settimeout for loading
    setTimeout(()=>{
      this.Buttons=false
      this.Loading = true;
      this.ButtonsService.addRating(this.rating, this.title)
                          .pipe(
                            catchError(
                              err => 
                                of(this.messageError = err.error.message)
                            
                            ))
                          .subscribe( ( resp:any ) => {
                            if (resp){
                              this.message = resp.message
                            }else{
                              this.messageError = "The rating could not be added. Please try later"
                            }
                          })
                          

      //settimeout for message
      setTimeout(()=>{
        this.Loading =false;
        this.addMessage = true;
      }, 5000);
      
    }, 1000);

  }

  
  



}
