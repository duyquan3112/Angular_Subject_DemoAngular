import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { user } from '../models/models';
import { AuthService } from '../service/auth.service';
import { SharingService } from '../service/sharing.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login/login.component.css','../login-layout/login-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
    
  }
  msgSignUpStatus:String = "";
  
  insertFrm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private sharingSrv:SharingService) {
    this.insertFrm = this.fb.group({
      username: ['', Validators.required],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    });
  }

  async onSubmit() {
    // if (this.insertFrm.invalid) //co disable ben html roi thi khong can if nua
    // 		{
    // 		  return;
    // 		}	

    let userInfo = new user();
    //lay thông tin dữ liệu nhập trên form
    userInfo.username = this.insertFrm.controls["username"].value;
    userInfo.name = this.insertFrm.controls["name"].value;
    userInfo.password = this.insertFrm.controls["password"].value;
    userInfo.tel = this.insertFrm.controls["tel"].value;
    userInfo.email = this.insertFrm.controls["email"].value
    this.auth.signup(this.insertFrm.controls["email"].value, this.insertFrm.controls["password"].value ).then(data => {console.log(data);
      // if(this.sharingSrv.isSignedUp.value){
        this.msgSignUpStatus = "<span>Sign Up Success!</span>";
        let timerNavigate = setInterval(() => this.router.navigate(['login']), 2000)
        setTimeout(() => {clearInterval(timerNavigate)}, 2001)
      // }else{
      //   this.msgSignUpStatus = "<span>Sign Up Failed!</span>";
      // }
    }, err => {
      console.log(err);
      this.msgSignUpStatus = "<span>Sign Up Failed!</span>";
    }
    );
    // if(!this.sharingSrv.isSignedUp.value){
    //   this.msgSignUpStatus = "<span>Sign Up Failed!</span>";
    // }
    //...tương tự cho những trường khác

    //this.service.insertItem(item).subscribe(data=>console.log(data.name)); //gọi với tên hàm tương ứng với bước số 7
    
  }

  changeToLogin() {
    this.router.navigate(["login"]);
  }
}
