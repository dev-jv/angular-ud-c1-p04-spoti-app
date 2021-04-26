import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean | undefined;

  constructor(private spotify: SpotifyService) {}

  search(term: string): any {
      console.log(term);
      this.loading = true;
      this.spotify.getArtists(term)
        .subscribe((data: any) => {
          // console.log(data.artists.items);
          console.log(data);
          this.artists = data;
          this.loading = false;
        });
  }
}
