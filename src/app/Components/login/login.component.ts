import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'
import { from } from 'rxjs'
import { AuthenticationService  } from '../../Services/authentication.service'

import { ValidationsService } from '../../Services/validations.service'

import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  email: string
  password: string
  

  constructor(private val:ValidationsService,public auth: AuthenticationService , private router: Router,private toastr: ToastrService) { }




  login() {

    const credentials = {
      email:this.email,
      password:this.password
    }

    

    if(!this.val.validatingLogin(credentials)){
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
    // if(!this.val.validatingPassword(credentials.password)){
    //   this.flash.show('*** 6 - 10 characters should be in your password ***', {cssClass:'alert-danger',timeout:3000})
    //   console.log('invalid password')
    //   return false
    // }

    console.log(this.email+' & '+this.password)
    
    // this.auth.login(credentials).subscribe(
    //   (user) => {
    //     this.router.navigateByUrl('/dashboard')
        
    //   },
    //   err => {
    //     this.toastr.error("*** Sign in failed ***","",{
    //       timeOut: 2000,
    //     });
    //     console.error(err);
    //     // alert('*** Sign in failed ***')
        
    //   }
    // )


    this.auth.login(credentials).subscribe(user =>{
      if(user.success){
        this.router.navigateByUrl('/profile')
        console.log(user.message)
      }
      else{
        this.toastr.error("*** Please check your password again ***","",{
          timeOut: 3000,
          positionClass: 'toast-top-full-width'
        });
        console.log(user.message)
      }
    })

    
  }


  ngOnInit(): void {
  
  }

  

}
