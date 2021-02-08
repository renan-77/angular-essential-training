// Modules Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Services Import
// import { MediaItemService } from './media-item.service';

// Directives Import
import { FavoriteDirective } from './favorite.directive';

// Pipes Import
import { CategoryListPipe } from './category-list.pipe';

// Components Import
import { AppComponent } from './component/app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';

import { lookupListToken, lookupList } from './providers';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: lookupListToken, useValue: lookupList }
    ]
})

export class AppModule { }
