import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { WorkerGuard } from './guards/worker.guard';
import { WorkerDeGuard } from './guards/worker-de.guard';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';

const routes: Routes = [
  { path: 'worker', component: WorkerComponent, 
    canActivate:[WorkerGuard],
    canDeactivate:[WorkerDeGuard],
    canActivateChild:[WorkerGuard],
    children:[
      { path: 'details', component: WorkerDetailComponent},
    ]},
  { path: 'home', component: HomeComponent },
  
  { path: 'admin', component: AdminComponent, canActivate:[AdminGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
