import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';


const addRoutes: Routes = [
    { path: '', component: MediaItemFormComponent }
];

export const ItemAddRouting = RouterModule.forChild(addRoutes);
