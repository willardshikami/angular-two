import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  searchStr: String;

  //Initialize the search music function
  searchMusic(){
    console.log(this.searchStr);
  }

}