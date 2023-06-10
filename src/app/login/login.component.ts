import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  insertFrm: FormGroup;
  email:string = "";
  pass:string ="";
  errMsg:String = "";
  constructor(private auth:AuthService, private router: Router, private fb: FormBuilder){
    this.insertFrm = this.fb.group({
    
      password: ['', [Validators.required]],
      
      email: ['', [Validators.required, Validators.email]],
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    });
    
  }

  ngOnInit(): void {
    
  }


  loginGmail(){
    this.auth.loginAuthGmail().then(user => {
      console.log('Login Gmail thanh cong');
      console.log(user);
      //location.href=('/home'); // load lai nguyen trang
      this.router.navigate(["home"]); // loading single page

    }, err => console.log(err))
  }

  onSubmit(){
    this.email = this.insertFrm.controls["email"].value;
    this.pass = this.insertFrm.controls["password"].value;

    this.auth.loginAuthAcc(this.email, this.pass).then(user => {
      console.log('Login Acc thanh cong');
      console.log(user);
      //location.href=('/home'); // load lai nguyen trang
      this.router.navigate(["home"]); // loading single page

    }, err => {console.log(err);
      this.errMsg = "<br><span>Email or Password is not correct. Please try again!</span>";
    })
  }


  changeToSignUp(){
    this.router.navigate(["signup"]);
  }
}
