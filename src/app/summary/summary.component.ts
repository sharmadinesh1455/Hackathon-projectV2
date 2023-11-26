import { Component, OnInit } from '@angular/core';
import { Data } from 'src/Models/data';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  data1 : Data = new Data();

  ngOnInit(): void {
  }

  constructor(){

  }

  getUploadedData(data : any){
    console.log("Uploaded Data", data);
    this.data1 = data;
    console.log("Uploaded Data ::::: ", this.data1);
    
  }

}
