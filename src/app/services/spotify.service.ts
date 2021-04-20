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
      Authorization: 'Bearer BQBcGz2h34WHnjVDfwYn3DotJDn-z48eIEaFfzhmnhG3Rb1I-WdjHcsMhtpjAcJmiLdfiC71jA2CAcm98XQNv34D3g7zm7MAF9c0pL6OhS7INP4b4JrCDFNML5KjT2hyzI1aLlwaBzBTxITOszRM-AkrF-6JoeE'
    });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    //   .subscribe( data => {
    //     console.log(data);
    //   });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25&country=kr', { headers });
  }

  getArtist(term: string): any{
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBcGz2h34WHnjVDfwYn3DotJDn-z48eIEaFfzhmnhG3Rb1I-WdjHcsMhtpjAcJmiLdfiC71jA2CAcm98XQNv34D3g7zm7MAF9c0pL6OhS7INP4b4JrCDFNML5KjT2hyzI1aLlwaBzBTxITOszRM-AkrF-6JoeE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURI(term)}&type=artist&limit=25`, { headers });
  }
}
