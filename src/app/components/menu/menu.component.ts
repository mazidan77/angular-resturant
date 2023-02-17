import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() Meals:any=''
  constructor(private service:SharedService ,private router:Router){}

arr:{}[]=[]
c:any=0
count:any=1
  show(s:any){


this.arr.push(s)


this.service.sharedvalue$.next(this.count++)
this.service.setitem(this.arr)


// console.log(this.arr)
  }

  add(s:any){

    this.c=this.c+1
    console.log(this.c)


  }

}
