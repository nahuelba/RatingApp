import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { RatingsService } from '../../services/ratings.service';



@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  element_data: any = []

  displayedColumns: string[] = ['position', 'album', 'stars'];
  
  dataSource = new MatTableDataSource();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  constructor(private RatingsService: RatingsService) { }

  ngOnInit(): void {
    this.RatingsService.getRatings()
    .subscribe(
      resp =>       
        this.dataSource = new MatTableDataSource<any>(resp)
      )
    
  }

}
