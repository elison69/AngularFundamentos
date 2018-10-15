import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
 

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(private activateRoute: ActivatedRoute, private photoService: PhotoService){ }
  
  ngOnInit(): void {
    this.username = this.activateRoute.snapshot.params.username;
    this.photos = this.activateRoute.snapshot.data.photos;
  }

  load(){
    this.photoService.listFromUserPaginated(this.username, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if (!photos.length) {
        this.hasMore = false;
      }
    })
  }

}