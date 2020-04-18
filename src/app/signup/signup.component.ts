import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  ngDoCheck() {
    console.log("checking started...");
  }

  ngOnChanges() {
    console.log("ng on changes started...");
  }

  onSubmit(form:FormGroup) {
    console.log("Valid? ",form.valid);
    console.log("Name", form.value.name);
    console.log("email",form.value.email);
    this.router.navigate(['/dealer']);
    let myObj = {
      name:form.value.name,
      email:form.value.email
    };
  }

}
