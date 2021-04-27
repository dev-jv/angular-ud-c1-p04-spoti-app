import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loadingArtist: boolean;
  topTracksList: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtist(params[`id`]);
      this.getTopTracks(params[`id`]);
      // console.log(params[`id`]);
    });
  }

getArtist(id: string): any {
  this.loadingArtist = true;
  this.spotifyService.getArtist(id)
    .subscribe( (artist: any) => {
      console.log(artist.images);
      this.artist = artist;
      this.loadingArtist = false;
    });
}

getTopTracks(id: string): any {
  this.spotifyService.getTopTracks(id)
    .subscribe( (topTracks: any) => {
      console.log(topTracks);
      this.topTracksList = topTracks;
    });
}

}
