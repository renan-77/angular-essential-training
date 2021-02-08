import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { ItemAddRouting } from './item-add.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ItemAddRouting
    ],
    declarations: [
        MediaItemFormComponent
    ]
})

export class ItemAddModule {}
