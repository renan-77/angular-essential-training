import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.css']
})

export class MediaItemFormComponent implements OnInit {
    form: FormGroup;

    constructor() { }

    onSubmit(mediaItem): void {
        console.log(mediaItem);
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            medium: new FormControl('Movies'),
            name: new FormControl('Name'),
            category: new FormControl('Category'),
            year: new FormControl('Year')
        });
    }
}
