import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private item:any;
  constructor() { }

  setitem(item:any){
this.item=item
  }
  setcart(item:any){
this.item=item
  }

  getitem(){
    return this.item
  }
  getcart(){
    return this.item
  }


  sharedvalue$ = new Subject()
}
