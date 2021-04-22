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

  getQuery( query: string ): any {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBaN5K8bou80lNaGyP1h0DPiN77n3kRaqWtxhOUvQNPMm4zQ-aZNqkK2IREbM0YHu9tE3OVCbkj-kUyvYE'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    // ---------------------------------- <> 3
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBNZbpGuPhtwiGm3pbbIeT2FAzXe3PfJT5BLGA7_caNbZ4CDy9qqKCQxs-hyeObqXegL4NfaRPOIqAXdKc'
    // });
    //
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    //   .subscribe( data => {
    //     console.log(data);
    //   });

    // --------------------------------- <> 4.5
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQAdOrv6bObTFeGH0ASXQWH_C6bkc36INWXrAIodKsVWEwrzqAePyUutfkzE3MzRGxg9c-fkEpfGk5o8PBs'
    // });
    //
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25&country=kr', { headers });

    // --------------------------------- <> 6
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQAdOrv6bObTFeGH0ASXQWH_C6bkc36INWXrAIodKsVWEwrzqAePyUutfkzE3MzRGxg9c-fkEpfGk5o8PBs'
    // });
    //
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25&country=kr', { headers })
    //   .pipe( map( data => {
    //     // @ts-ignore
    //     return data.albums.items;
    //   }));

    // -------------------------------------------------------------------- <> 7
    return this.getQuery('browse/new-releases?limit=25&country=kr')
      .pipe( map( data => {
        // @ts-ignore
        return data.albums.items;
      }));
  }

  getArtist(term: string): any{
    return this.getQuery(`search?q=${encodeURI(term)}&type=artist&limit=25`)
      .pipe( map( data => {
        // @ts-ignore
        return data.artists.items;
      }));
  }
}
