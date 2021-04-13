import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Result } from '../../interfaces/discogs.interface';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  result: Result | undefined

 

  constructor(
    private TitleService: TitleService
    ){}

  ngOnInit(): void {
    this.TitleService.search()
                      .subscribe( ( resp ) => {
                        if (resp.cover_image){
                          this.result = resp
                        }else{
                          window.location.reload();
                        }
                      
                        
                      });
  }

}
