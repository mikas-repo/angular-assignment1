import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactType, Feedback } from '../../models/feedback/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm!:FormGroup;
  feedback!:Feedback;
  contacttype = ContactType;

  @ViewChild('fform') feedbackFormDirective:any;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      telnum:['',[Validators.required]],
      agree:['',[Validators.required]],
      contactType:['None',[Validators.required]],
      message:''
    });
    // pristine reset
    this.feedbackFormDirective?.resetForm();
  }

  onSubmitFeedback(){
    this.feedback = this.feedbackForm.value;
    console.log("Feedback", this.feedback);
    this.feedbackForm.reset({
      firstName:'',
      lastName:'',
      email:'',
      telnum:0,
      agree:false,
      contactType:'None',
      message:''
    });
  }
 
}
