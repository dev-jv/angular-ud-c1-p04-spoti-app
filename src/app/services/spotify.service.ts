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
      Authorization: 'Bearer BQBNZbpGuPhtwiGm3pbbIeT2FAzXe3PfJT5BLGA7_caNbZ4CDy9qqKCQxs-hyeObqXegL4NfaRPOIqAXdKc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe( data => {
        console.log(data);
      });
  }

}
