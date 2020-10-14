import { Component, OnInit, ViewChild } from '@angular/core';
import {IonRange} from '@ionic/angular';
import {Howl} from 'howler';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  playlist = [
    {
        name: 'Em Mệt Rồi Còn Anh',
        path: '/assets/music/Em-Met-Roi-Con-Anh-Cover-Nhu-Hexi.mp3'
    },
    {
        name: 'Anh Sai Rồi',
        path: '/assets/music/Anh-Sai-Roi-Son-Tung-M-TP.mp3'
    }
  ]
  constructor() { }
  activeTrack = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range',{static: false}) range: IonRange;

  ngOnInit() {
  }

  start(track){
    if (this.player) {
       this.player.stop();
    }
    this.player = new Howl({
       src: [track.path],
       html5: true,
       onplay: () => {
         this.isPlaying = true;
         this.activeTrack = track
         this.updateProgress();
       },
       onend: () => {

       }
    })
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
        this.start(this.playlist[index+1]);
    } else {
        this.start(this.playlist[0])
    }
  }

  prev(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
        this.start(this.playlist[index-1]);
    } else {
        this.start(this.playlist[this.playlist.length - 1])
    }
  }

  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration*(newValue/100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 100);
  }

}
