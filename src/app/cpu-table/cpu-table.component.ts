import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cpu } from '../models/models';
import { CpusService } from '../service/cpus.service';

@Component({
  selector: 'app-cpu-table',
  templateUrl: './cpu-table.component.html',
  styleUrls: ['./cpu-table.component.css']
})
export class CpuTableComponent implements OnInit {
  //cpus: Observable<cpu[]>;
  cpus: cpu[]=[];
  config: any;

  constructor(private service: CpusService){
  
  // this.cpus = this.service.getItems();
  // console.log(typeof(this.cpus))
  // console.log(this.service.getItems())
  // console.log(typeof(this.service.getItems()))
  
  this.service.getItems().subscribe(data=>{this.cpus = data})

  this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.cpus.length
    };

  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }


  ngOnInit(): void {

  }

}
