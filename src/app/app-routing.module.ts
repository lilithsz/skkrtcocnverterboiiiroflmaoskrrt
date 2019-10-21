import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideoComponent} from './video/video.component';
import {BildComponent} from './bild/bild.component';
import {AudioComponent} from './audio/audio.component';
import {NotfoundComponent} from './notfound/notfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'bild', component: BildComponent },
  { path: 'audio', component: AudioComponent},
  { path: '', component: HomeComponent },
  { path: '', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
