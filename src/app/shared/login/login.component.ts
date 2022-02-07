import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Feedback, ContactType } from '../../models/feedback/feedback';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '', remember: false };


  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {}



  onSubmit() {
    console.log(this.user, 'user');
  }

}
