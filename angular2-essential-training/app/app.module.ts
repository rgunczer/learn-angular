import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

// const lookupLists = {
//     mediums: ['Movies', 'Series']
// };

@NgModule({
    imports: [
        BrowserModule,
        //FormsModule
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    providers: [
        MediaItemService,
        // { provide: 'lookupListToken', useValue: lookupLists }
        { provide: lookupListToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}



// two types of directives
// - structural (alter the dom)
// - attribute

// model-driven forms

// Template Driven => Ease of use, Simple
// Model Driven => Full powered