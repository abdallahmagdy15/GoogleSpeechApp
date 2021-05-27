import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleSpeechApp';
  text = 'hello';
  isRecording = false;

  constructor(public http: HttpClient) {
  }
  StartRecording() {
    this.http.get('http://localhost:3000/api/speech-to-text/').subscribe(res => {
      console.log(res);
      this.text += res;
    },
     err => console.error
    );
  }

}
