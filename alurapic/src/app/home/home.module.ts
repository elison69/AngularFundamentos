import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SingInComponet } from './singin/singin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations: [ 
        SingInComponet
    ],
    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        VMessageModule,
        AppRoutingModule
    ]
})

export class HomeModule {}