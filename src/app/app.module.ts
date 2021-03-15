import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {Option2Component} from './option2/option2.component';
import {Option1Component} from './option1/option1.component';
import {CustomInputComponent} from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    Option2Component,
    Option1Component,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ],
      types: [
        {name: 'custom', component: CustomInputComponent, wrappers: ['form-field']},
      ],
      extras: {lazyRender: true}
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
