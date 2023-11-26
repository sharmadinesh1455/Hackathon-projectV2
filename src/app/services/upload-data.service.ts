import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadDataService {
  [x: string]: any;

  constructor(private httpClient : HttpClient) { }

  uploadData(formData :any){
    return this.httpClient.post('http://localhost:9090/uploadData', formData)
  }

}
