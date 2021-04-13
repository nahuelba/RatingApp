import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  element_data: any = []
  

  rating_url: string = "https://ratingappbackend.herokuapp.com/ratings/"


  constructor(private http: HttpClient) {}

  getRatings(){
    return this.http.get<any>(this.rating_url)                  
  }

}
