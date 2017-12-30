import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [ SpotifyService ]
})
export class SearchComponent  {
  searchStr: string;

  //inject spotify service
  constructor(private _spotifyService: SpotifyService){

  }
  
    //Initialize the search music function
    searchMusic(){
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe( res => {
        console.log(res.artists.items);
      })
    }
} 