import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface vga { id?: string; name?: string; edate?: string; sn?: string; price?: number; quantity?: number }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';
  // vga: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.vga = firestore.collection('vga').valueChanges();
  // }
}
