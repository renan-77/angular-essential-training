import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('click') onMouseClick(): void{
        if (!this.hovering){
            this.hovering = true;
        }else {
            this.hovering = false;
        }
    }
    @Input() set appFavorite(value) {
        this.isFavorite = value;
    }
}
