import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _matDialog: MatDialog) { }

  ngOnInit(): void {
  }


  openLoginForm(){
    this._matDialog.open(LoginComponent ,{
      width:'500px',
      height:'450px'
    })
  }

}
