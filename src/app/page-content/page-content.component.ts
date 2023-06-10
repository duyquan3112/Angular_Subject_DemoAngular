import { Component, OnInit } from '@angular/core';
import { from, Observable, of, take, tap } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface vga { id?: string; name?: string; edate?: string; sn?: string; price?: number; quantity?: number; status?:boolean }

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
  // vga: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.vga = firestore.collection('vga').valueChanges();
  // }
  private itemsCollection: AngularFirestoreCollection<vga>;
  vgas: Observable<vga[]>;
  config: any;
  
  constructor(private readonly afs: AngularFirestore) {
    
    // this.config = {
    //   itemsPerPage: 5,
    //   currentPage: 1,
    //   totalItems: 
    // };
    

    
  this.itemsCollection = afs.collection<vga>('vga');
    //this.items = this.itemsCollection.valueChanges();
    
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. Only using for versions 7 and earlier
        
    
    
    this.vgas = this.itemsCollection.valueChanges( { idField: 'id1' }); //chỉ sử dụng cho Angular 8,9
    //id1: ten field đại diện cho documnent id, lưu ý không 
    //được đặt trùng với tên field khai báo trong dữ liệu
  }
  ngOnInit(): void {
    //this.add()
    //this.update() 
    //this.delete()
  }

  add (id?:string, name?:string, sn?:string, edate?:string, price?:number, quantity?:number, status?:boolean){
    let it : vga = {};
    it.id=id
    it.name = name
    it.edate = edate
    it.price = price
    it.quantity = quantity
    it.sn = sn
    it.status = status

    let docid = "8";
	// tạo docid bằng AngularFirestore
	// const id = this.afs.createId();

    //this.itemsCollection.add(it);//thêm với docid tự động tạo
    
    //them vao itemsCollection với docid cụ thể
    this.itemsCollection.doc(docid).set(Object.assign({}, it));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }
  update(id:string="default id", name:string="default item", sn:string="default sn", edate:string="default edate", price:number=100, quantity:number=100, status:boolean=true){
    let docId = "6"
    let it : vga = {};
    it.id=id
    it.name = name
    it.edate = edate
    it.price = price
    it.quantity = quantity
    it.sn = sn
    it.status = status

    this.itemsCollection.doc(docId).update(it);
  }
  delete(docId = "6"){
       this.itemsCollection.doc(docId).delete();
  }

  // pageChanged(event: any){
  //   this.config.currentPage = event;
  // }

}

