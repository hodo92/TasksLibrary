import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import {ButtonModule} from 'primeng/primeng';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    ButtonModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
