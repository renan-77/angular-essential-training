import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-media-item',
    templateUrl: './media-item/media-item.component.html',
    styleUrls: ['./media-item/media-item.component.css']
})

export class MediaItemComponent {
    @Input() mediaItem;
    @Output() delete = new EventEmitter();

    onDelete(): void{
        console.log('Deleted');
        this.delete.emit(this.mediaItem.name);
    }
}
