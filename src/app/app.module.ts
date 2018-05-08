import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ShowDirective } from './show.directive';
import { SelectDirective } from './select.directive';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ShowDirective,
    SelectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
