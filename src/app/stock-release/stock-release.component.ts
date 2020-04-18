import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat, FormatWidth } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { UploadService } from '../upload/upload.service';
@Component({
  selector: 'app-stock-release',
  templateUrl: './stock-release.component.html',
  styleUrls: ['./stock-release.component.css']
})

export class StockReleaseComponent implements OnInit {

  users: any;
  constructor(private title:Title, private uploadService: UploadService) { }

  ngOnInit() {
    this.displayDate();
    this.title.setTitle("Stock Release");
    //this.getUsers();
  }

  displayDate() {
    let day = new Date()
    console.log(getLocaleDateFormat("en",FormatWidth.Short));
  }

  getUsers() {
    this.uploadService.getAllUsres().subscribe((result)=>{
      console.log(result);
      this.users = result;
    },(error)=>{
      console.log(error);
    })
  }

}
