// Modules Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

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

import { lookupListToken, lookupList } from './providers';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: lookupListToken, useValue: lookupList },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ]
})

export class AppModule { }
