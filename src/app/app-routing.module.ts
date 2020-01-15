import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '././login/login.component';


const routes: Routes = [
  // Dinamic imports
  // Se hace carga de rutas haciendo uso de [lazy loaded] para mejorar la carga de componentes
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'playlist', loadChildren: './playlist/playlist.module#PlaylistModule' },
  { path: 'login/:token', component: LoginComponent },
  { path: '**', redirectTo: 'login/noAuth?-' },
  { path: '', redirectTo: 'login/noAuth?-', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
