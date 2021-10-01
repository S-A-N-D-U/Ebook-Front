import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'
import { Router } from '@angular/router'

import { ValidationsService } from 'src/app/Services/validations.service'
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string
  lastName:string
  email:string
  telephone:string
  password:string
  role:string

  constructor(public auth: AuthenticationService , private router: Router, private val:ValidationsService,private toastr: ToastrService) { }

  register() {
    const credentials= {
      firstName: this.firstName,
      lastName: this.lastName,
      email:this.email,
      telephone:this.telephone,
      password:this.password,
      role: this.role
    }



    if(!this.val.validatingRegister(credentials)){
      console.log('fill all')
      this.toastr.error("*** Please fill all the fields ***","",{
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
         
      });
      return false
    }

    if(!this.val.validatingEmail(credentials.email)){
      console.log('invalid email')
      this.toastr.error("*** Please enter valid Email address ***","",{
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
         
      });
      
      return false
    }

    if(!this.val.validatingPassword(credentials.password)){
      this.toastr.error("*** 6-10 characters should be in your password ***","",{
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
         
      });
      return false
    }

    if(!this.val.validatingTelephone(credentials.telephone)){
      console.log(credentials.telephone)
      console.log('invalid telephone number')
      this.toastr.error("*** Please enter valid telephone number ***","",{
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
         
      });
      
      return false
    }



    this.auth.register(credentials).subscribe(user=> {
      if(user.success){
        this.router.navigateByUrl('/login')
        this.toastr.success("registered successfully ","",{
          timeOut: 2000,
          // positionClass: 'toast-top-full-width'
        });
        // alert('registered successfully')
      }else{
        // this.flash.show(user.message, {cssClass:'alert-danger',timeout:3000})
        this.toastr.error(user.message,"",{
          timeOut: 2000,
          
        });
        console.log(user.message)
      }
    })
  }
  ngOnInit(): void {
  }

}
