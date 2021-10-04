import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  validatingRegister(credentials){
    
    if (credentials.firstName==undefined || credentials.lastName==undefined || credentials.email==undefined || credentials.password==undefined ){
      return false
    }else {
      return true
    }
  }

  validatingLogin(credentials){
    
    if (credentials.email==undefined || credentials.password==undefined){
      return false
    }else {
      return true
    }
  }

  validatingEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatingPassword(password){
    const re1 = /^\S{6,10}$/;
    return re1.test(password)
  }

  validatingTelephone(telephone){
    const re = /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
    return re.test(telephone)
  }
}
