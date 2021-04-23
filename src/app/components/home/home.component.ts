import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    // ------------------------- <> 3
    // this.spotify.getNewReleases();

    // ------------------------- <> 4
    // this.spotify.getNewReleases()
    //   .subscribe( (data: any) => {
    //     console.log(data.albums.items);
    //     this.newSongs = data.albums.items;
    //   });

    // -------------------------- <> 5.6.7
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        // console.log(data.albums.items);
        console.log(data);
        this.newSongs = data;
        this.loading = false;
      });
  }
}
