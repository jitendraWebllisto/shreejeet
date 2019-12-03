import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service'
import { Router } from '@angular/router';




@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
  errorMessage = ""
  errorDiv:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiservice: ApiService,
    private router:Router
    
    ) { }

  ngOnInit() {
    this.formInit()
  }


  formInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
  })
    
  } 
  get f() { return this.loginForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    // this.spinner.show(); 
    this.apiservice.getConfig(this.loginForm.value).subscribe(res => {
      // this.spinner.hide();
      if(res){
        if(res['user']){
        this.errorDiv = true;
        this.errorMessage=res['user'];
        // this.toastr.error(this.errorMessage)
        setTimeout(()=>{
        this.errorDiv = false;
         }, 3000);
      //  this.spinner.hide();
        }

        if(res['token']){
          alert("code is working Fine ")
          localStorage.setItem('token',res.token)
          this.apiservice.token = res['token'];
          this.router.navigate(['/dashboard']);
        }
        
      } 
      
      error=>{
          console.log(error);
            this.errorDiv = true;
            this.errorMessage = error;
            // this.spinner.hide();

      }
      
    })
​
  }
}
