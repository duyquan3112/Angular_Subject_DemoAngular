import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpu, vga } from '../models/models';
import { CpusService } from '../service/cpus.service';

@Component({
  selector: 'app-insert-node',
  templateUrl: './insert-node.component.html',
  styleUrls: ['./insert-node.component.css']
})
export class InsertNodeComponent implements OnInit {

  insertFrm: FormGroup;

  constructor(private fb: FormBuilder, private service: CpusService){
    this.insertFrm = this.fb.group({
      id:['',Validators.required], 
      name:['',[Validators.required]],
      sn:['',[Validators.required]],
      edate:['',[Validators.required]],
      quantity:['',[Validators.required]],
      price:['',[Validators.required]],
      status:['',[Validators.required]],
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

  onSubmit(){
    // if (this.insertFrm.invalid) //co disable ben html roi thi khong can if nua
		// 		{
		// 		  return;
		// 		}	
    	
				let item = new cpu();
				//lay thông tin dữ liệu nhập trên form
				item.id = this.insertFrm.controls["id"].value;
        item.name = this.insertFrm.controls["name"].value;
        item.sn = this.insertFrm.controls["sn"].value;
        item.edate = this.insertFrm.controls["edate"].value;
        item.quantity = this.insertFrm.controls["quantity"].value;
        item.price = this.insertFrm.controls["price"].value;
        item.status = this.insertFrm.controls["status"].value;
        this.service.insertItem(item).subscribe(data => {console.log(data)});
				//...tương tự cho những trường khác
				
				//this.service.insertItem(item).subscribe(data=>console.log(data.name)); //gọi với tên hàm tương ứng với bước số 7
  }
}

