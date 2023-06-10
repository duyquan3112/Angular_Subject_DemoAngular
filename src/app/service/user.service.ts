import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AngularFireAuth) { }

  getUserInfo() {
    //.currentuser tra ve lien, nhung neu qua trinh dang nhap lau thi du lieu
    //gui ve chua co
    //.onAuthStateChanged thi tra ve trong luc lay se nhanh hon
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged( function (user){
        if (user) {
          //this.sharingSrv.isUserLoggedIn.next(true);
          resolve(user);
          
        } else {
          reject('No user logged in');
        }
      })
    })
  }

}
