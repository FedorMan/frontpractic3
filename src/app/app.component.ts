import {Component, OnInit} from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ServerService]
})
export class AppComponent {
  fileToUpload: File = null;
  images: Object;
  score: Object;

  constructor(private serverService: ServerService) {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.serverService.sendFile(this.fileToUpload).subscribe(value => {
      console.log(value);
      this.images = value;
    });
  }

  send(file, human_str, answer) {
    this.serverService.sendAnswer(file, human_str, answer).subscribe(value => {
      console.log(value);
      this.score = value;
      this.score['precision'] = this.score['TP'] / (this.score['TP'] + this.score['FP']);
      this.score['recall'] = this.score['TP'] / (this.score['TP'] + this.score['FN']);
    });
  }
}

