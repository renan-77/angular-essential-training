import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MediaItemService {
    constructor(private http: HttpClient) { }

    // mediaItems = [
    //     {
    //         id: 1,
    //         name: 'Firebug',
    //         medium: 'Series',
    //         category: 'Science Fiction',
    //         year: 2010,
    //         watchedOn: 1294166565384,
    //         isFavorite: false
    //     },
    //     {
    //         id: 2,
    //         name: 'The Small Tall',
    //         medium: 'Movies',
    //         category: 'Comedy',
    //         year: 2015,
    //         watchedOn: null,
    //         isFavorite: true
    //     }, {
    //         id: 3,
    //         name: 'The Redemption',
    //         medium: 'Movies',
    //         category: 'Action',
    //         year: 2016,
    //         watchedOn: null,
    //         isFavorite: false
    //     }, {
    //         id: 4,
    //         name: 'Hoopers',
    //         medium: 'Series',
    //         category: 'Drama',
    //         year: null,
    //         watchedOn: null,
    //         isFavorite: true
    //     }, {
    //         id: 5,
    //         name: 'Happy Joe: Cheery Road',
    //         medium: 'Movies',
    //         category: 'Action',
    //         year: 2015,
    //         watchedOn: 1457166565384,
    //         isFavorite: false
    //     },
    //     {
    //         id: 1,
    //         name: 'Firebug',
    //         medium: 'Series',
    //         category: 'Science Fiction',
    //         year: 2010,
    //         watchedOn: 1294166565384,
    //         isFavorite: false
    //     },
    //     {
    //         id: 2,
    //         name: 'The Small Tall',
    //         medium: 'Movies',
    //         category: 'Comedy',
    //         year: 2015,
    //         watchedOn: null,
    //         isFavorite: true
    //     }, {
    //         id: 3,
    //         name: 'The Redemption',
    //         medium: 'Movies',
    //         category: 'Action',
    //         year: 2016,
    //         watchedOn: null,
    //         isFavorite: false
    //     }, {
    //         id: 4,
    //         name: 'Hoopers',
    //         medium: 'Series',
    //         category: 'Drama',
    //         year: null,
    //         watchedOn: null,
    //         isFavorite: true
    //     }, {
    //         id: 5,
    //         name: 'Happy Joe: Cheery Road',
    //         medium: 'Movies',
    //         category: 'Action',
    //         year: 2015,
    //         watchedOn: 1457166565384,
    //         isFavorite: false
    //     }
    // ];

    get(medium): Observable<MediaItem[]>{
        const getOptions = {
            params: { medium }
        };
        return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
            .pipe(
                map( (response: MediaItemsResponse) => {
                    return response.mediaItems;
                }),
                catchError(this.handleError)
            );
    }

    add(mediaItem): Observable<any> {
        return this.http.post('mediaitems', mediaItem)
            .pipe(catchError(this.handleError));
    }

    delete(mediaItem): Observable<any> {
        return this.http.delete(`mediaitems/${mediaItem.id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message);
        return throwError('Data error occurred, try again.');
    }
}

export interface MediaItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
}

interface MediaItemsResponse{
    mediaItems: MediaItem[];
}
