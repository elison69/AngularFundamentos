import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.mudule';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CoreModule } from '../core/core.modeule';


@NgModule({
    exports: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {}