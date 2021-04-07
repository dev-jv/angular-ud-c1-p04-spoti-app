import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      Authorization: 'Bearer BQDtrsrJw3z54YNxLp_EF4c2SCKj-EnWWEoXnmo11Al-rNXTLxeAmlhyIxDn2Zy2WuDNvYW-ph1isQzcmAA'
    });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    //   .subscribe( data => {
    //     console.log(data);
    //   });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

}
