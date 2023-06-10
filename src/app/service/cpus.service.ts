import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {cpu} from '../models/models'

@Injectable({
  providedIn: 'root'
})
export class CpusService {
	//cpuArr: cpu[]=[];
  constructor(private http: HttpClient) { }
			
		  getItems():Observable<cpu[]>{
			return this.http.get<cpu[]>('http://localhost:8000/api/cpu/'); 
			
			//this.http.get<cpu[]>('http://localhost:8000/api/items/cpu/').subscribe(data => {this.cpuArr = data});
			//return this.cpuArr;
		  }

		  insertItem(item:cpu): Observable<cpu> {
			// header dung de dinh dang kieu du lieu muon gui
			//	const headers = { 'content-type': 'application/json'} 
			//	console.log(JSON.stringify(item))	// map object sang chuoi json					
			//return this.http.post<cpu>('http://localhost:8000/api/insert/', item); //, {'headers':headers}
			const headers = new HttpHeaders()
          	.set('Authorization', 'my-auth-token')
          	.set('Content-Type', 'application/json');
			
			return this.http.post<cpu>('http://localhost:8000/api/cpu', JSON.stringify(item), {'headers':headers}
		)}; 
}
