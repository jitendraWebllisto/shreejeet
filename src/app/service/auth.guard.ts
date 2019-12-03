import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {ApiService} from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiservice:ApiService,
    private router:Router){}

    canActivate(): boolean {
      if(this.apiservice.loginIn()){
        return true
      }else{
        this.router.navigate(['/login'])
      }

    }
 
}

