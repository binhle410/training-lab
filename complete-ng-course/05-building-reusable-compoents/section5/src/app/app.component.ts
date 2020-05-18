import {Component} from '@angular/core';
import {FavouriteChangedEventArgs} from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section5';
  selected = false;

  onFavoriteChange(isFavourite: FavouriteChangedEventArgs) {
    console.log('onFavoriteChange, favorite changed to ' + isFavourite.newValue);
    this.selected = !this.selected;
  }
}
