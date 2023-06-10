import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth, private sharingSrv: SharingService) { }

  signup(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          {
            resolve(res);
            
            console.log("Thanh cong");
            this.sharingSrv.isSignedUp.next(true);
            
          }
          ;
        }, err => {this.sharingSrv.isSignedUp.next(false); reject(err)});

    })
  }

  async loginAuthGmail() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return await this.fauth.signInWithPopup(provider)
      .then(res => {
        this.sharingSrv.isUserLoggedIn.next(true);
        console.log("Login thanh cong");
      })
  }

  async loginAuthAcc(email:string, pass:string) {
    //let provider = new firebase.auth.GoogleAuthProvider();
    return await this.fauth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        this.sharingSrv.isUserLoggedIn.next(true);
        console.log("Login thanh cong");
      })
  }

  logout() {
    this.fauth.signOut();
    return new Promise<any>(async (resolve, reject) => {
      if (await this.fauth.currentUser) {
        this.fauth.signOut();
        this.sharingSrv.isUserLoggedIn.next(false);//bổ sung dòng này
        resolve("log out");
      } else {
        reject();
      }

    })
  }

  

}
