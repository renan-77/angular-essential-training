import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from '../media-item.service';
import { pipe } from 'rxjs';

@Component({
    selector: 'app-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})

export class MediaItemListComponent implements OnInit{
    medium = '';
    mediaItems: MediaItem[];

    constructor(private mediaItemService: MediaItemService) {
    }

    ngOnInit(): void {
        this.getMediaItems(this.medium);
    }

    onMediaItemDelete(mediaItem): void {
        console.log('On media Item Delete Executed.');
        this.mediaItemService.delete(mediaItem);
    }

    getMediaItems(medium: string): void {
        this.medium = medium;
        this.mediaItemService.get(medium)
            .subscribe(mediaItems => {
            this.mediaItems = mediaItems;
        });
    }
}

