import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IText } from './IText';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleSpeechApp';
  text = '';
  isRecording = false;

  constructor(public http: HttpClient) {
  }
  StartRecording() {
    this.isRecording = true;
    this.http.get<IText>('http://localhost:3000/api/speech-to-text/').subscribe(res => {
      console.log(res);
      if (res.text == "clear all"|| res.text=="") {
        this.text = "";
      } else {
        this.text += " " + res.text;
      }
      this.isRecording = false;
    },
      err => {
        console.log(err);
        this.isRecording = false;
      }
    );
  }
  StopRecording() {
    this.isRecording = false;
    this.http.post('http://localhost:3000/api/speech-to-text/', {}).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }

}
