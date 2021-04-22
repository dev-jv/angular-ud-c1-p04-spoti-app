import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Here!');
  }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAdOrv6bObTFeGH0ASXQWH_C6bkc36INWXrAIodKsVWEwrzqAePyUutfkzE3MzRGxg9c-fkEpfGk5o8PBs'
    });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    //   .subscribe( data => {
    //     console.log(data);
    //   });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25&country=kr', { headers })
      .pipe( map( data => {
        // @ts-ignore
        return data.albums.items;
      }));
  }

  getArtist(term: string): any{
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAdOrv6bObTFeGH0ASXQWH_C6bkc36INWXrAIodKsVWEwrzqAePyUutfkzE3MzRGxg9c-fkEpfGk5o8PBs'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURI(term)}&type=artist&limit=25`, { headers })
      .pipe( map( data => {
        // @ts-ignore
        return data.artists.items;
      }));
  }
}
