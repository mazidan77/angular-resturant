import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouteReuseStrategy } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],


})
export class CartComponent {

  /**
   *
   */
  constructor(private service:SharedService,public dialog:MatDialog ,private router:Router) {



  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);

    setTimeout(() => {
      this.dialog.closeAll()
      this.router.navigate(['/order'])

    }, 1000)
  }


  x:any=''
unique:any=''
tp:any;
counter:any=1;
val:any=0

  ngOnInit()
  {
     this.x= this.service.getitem()
    this.unique = [...new Set(this.x)];

    console.log(this.unique)


  }


add(s:any){

s.Counter++
}

min(s:any){

s.Counter--
}

totalPrice() {
  return this.unique.reduce((total:any, product:any) => total + product.Price * product.Counter, 0);
}
totalitems() {
  return this.unique.reduce((total:any, product:any) => total + product.Counter, 0);
}

 }

 @Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})

 export class DialogElementsExampleDialog {}
