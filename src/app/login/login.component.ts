import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9-._]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });



  constructor() { }

  ngOnInit(): void {


  }


  gonder() {
    alert('Name: ' + this.form.get('name').value + ' Password: ' + this.form.get('password').value );
  }

}
