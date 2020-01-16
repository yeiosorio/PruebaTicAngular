import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DomseguroPipe } from '../domseguro.pipe';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  declarations: [PlaylistComponent, DomseguroPipe],
})
export class PlaylistModule { }
