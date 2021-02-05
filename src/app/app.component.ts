import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './component/app.component.html',
  styleUrls: ['./component/app.component.css']
})

export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Harry Potter',
        medium: 'Movies',
        category: 'Fantasy',
        year: 2001,
        watchedOn: 1294166565384,
        isFavorite: true
    };

    onMediaItemDelete(mediaItem): string {
        console.log(mediaItem);
        return mediaItem;
    }
}
