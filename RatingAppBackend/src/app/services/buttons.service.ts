import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  

  addRating(rating: number, album: string | undefined){

    const body = { album, rating }
    
    return this.http.post('https://ratingappbackend.herokuapp.com/ratings/create', body)  
                          
                    
  }

  constructor(private http: HttpClient) { }

  
}
