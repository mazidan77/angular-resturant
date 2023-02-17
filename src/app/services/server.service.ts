import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/menu'


  getall(){
    return this.http.get(this.url)
  }

  getbycat(cat:any){
return this.http.get(`${this.url}/?cat=${cat}`)
  }
  
  getbyid(id:any){
return this.http.get(`${this.url}/${id}`)
  }


  updateitem(id:any,body:any){
    return this.http.put(this.url+'/'+id,body)
      }

      additem(body:any){
        return this.http.post(this.url,body)
      }

      deleteitem(id:any){
        return this.http.delete(this.url+'/'+id)
      }
}
