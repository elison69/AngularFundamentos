import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.mudule';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({
    exports: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {}