import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private mediaItemService: MediaItemService,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe( paramMap => {
            let medium = paramMap.get('medium');
            if (medium.toLowerCase() == 'all') {
                medium = '';
            }
            this.getMediaItems(medium);
        });
    }

    onMediaItemDelete(mediaItem): void {
        console.log('On media Item Delete Executed.');
        this.mediaItemService.delete(mediaItem).subscribe(() => {
            this.getMediaItems(this.medium);
        });
    }

    getMediaItems(medium: string): void {
        this.medium = medium;
        this.mediaItemService.get(medium)
            .subscribe(mediaItems => {
            this.mediaItems = mediaItems;
            console.log('Get media Items func working: ' + this.mediaItems);
        });
    }
}

