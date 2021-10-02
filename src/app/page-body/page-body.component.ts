import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators, ReactiveFormsModule} from '@angular/forms'; //imports
import {SignUpserviceService } from 'src/app/Services/sign-upservice.service';


@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private signUpservice: SignUpserviceService) {  
  }

  signUp:FormGroup;

  ngOnInit(): void {
    this.signUp = this.formBuilder.group({ 
      'firstName' : ['',Validators.required],
      'lastName': ['',Validators.required],         
      'email':['',Validators.required, Validators.email],
      'password':['',Validators.required],
      

 })
}
insertData(){
    
    
  var formData: any = new FormData();
  formData.append("fullName", this.signUp.get('fullName').value);
  formData.append("email", this.signUp.get('email').value);
  formData.append("password", this.signUp.get('password').value);
  formData.append("telephone", this.signUp.get('telephone').value);
}
  

}
