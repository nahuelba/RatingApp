import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Album } from '../interfaces/discogs.interface';


@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private api_key: string = 'xHHZirXNhwpdPnxZrvAI'
  private secret_key: string = 'GkqHoNfekusvkSmJvlNKAOqOtfueRgSW'
  private service_url: string = 'https://api.discogs.com/database'
  private query: string = "Bill evans"
  
  
  constructor(private http: HttpClient) {}

  RandomPage(): string{
    return Math.floor(Math.random() * (500 - 0) + 0).toString()
  }

  search(){
    const params = new HttpParams()
          .set('q', this.query )
          .set('per_page', '1')
          .set('key', this.api_key)
          .set('secret', this.secret_key)
          .set('page', this.RandomPage())

    return this.http.get<Album>(`${ this.service_url }/search`, { params } )
                    .pipe(
                      map(resp => resp.results[0] )
                    )
  }
 



}
