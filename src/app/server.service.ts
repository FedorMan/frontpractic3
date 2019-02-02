import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) {}

  sendFile(fileToUpload: File) {
    return this.http.put('http://127.0.0.1:8000/upload/' + fileToUpload.name, fileToUpload);
  }

  sendAnswer(file, human_str, answer) {
    const body = {file: file, human_str: human_str, answer: answer};
    return this.http.post('http://127.0.0.1:8000/answer', body);
  }
}
