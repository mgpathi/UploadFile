import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload/upload.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mobile: any;
  email: any;
  age: any;
  personName: any;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  submitData(){
    let reqBody = {
      "name" : this.personName,
      "age" : this.age,
      "email"  : this.email,
      "mobile"  : this.mobile,
      "userSettings" : {
        "bike" : "Unicorn"
      }
    }
    console.log(reqBody);

    this.uploadService.submitUser(reqBody).subscribe((res)=>{
      console.log("User submitted successfully...!")
    },
    (error)=>{
      console.log("some error occured..!");
    })

  }

}
