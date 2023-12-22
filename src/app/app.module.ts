import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkerDeGuard } from './guards/worker-de.guard';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerComponent,
    AdminComponent,
    WorkerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [WorkerDeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
