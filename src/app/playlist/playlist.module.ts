import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  exports: [RouterModule],
  declarations: [PlaylistComponent],
})
export class PlaylistModule { }
