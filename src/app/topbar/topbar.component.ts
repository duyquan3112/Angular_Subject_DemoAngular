import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SharingService } from '../service/sharing.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  displayName: string = "";
  photoURL: string = "";

  @ViewChild('closebutton') closebutton:any;

  constructor(private userService: UserService, private auth: AuthService, private sharingSrv: SharingService, private router: Router) {
    this.sharingSrv.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.userService.getUserInfo()
          .then(user => {
            this.displayName = user.displayName != null ? user.displayName : user.email;
            this.photoURL = user.photoURL != null ? user.photoURL : user.photoURL
          });
        console.log(this.displayName);
        console.log(this.userService.getUserInfo());
      }else{
        this.displayName = ""
      }
    })

  }


  ngOnInit(): void {
  }

  logOut() {
    this.auth.logout();
    //location.href = "/login"
    this.closebutton.nativeElement.click();// gọi sự kiện click trên dấu x của model xác nhận logout của bootstrap
    this.router.navigate(["/login"]);
  }


}
