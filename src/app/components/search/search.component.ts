import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
  searchStr: String;
  
    //Initialize the search music function
    searchMusic(){
      console.log(this.searchStr);
    }
} 