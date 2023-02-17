import { Component } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-newdialog',
  templateUrl: './newdialog.component.html',
  styleUrls: ['./newdialog.component.css']
})
export class NewdialogComponent {
  uploadImage:any;

constructor(@Inject(MAT_DIALOG_DATA) public data: any , public server:ServerService ,public router:Router,private dialogRef: MatDialogRef<NewdialogComponent> ) {


}

addform = new FormGroup({
  Name:new FormControl("",[Validators.required,Validators.minLength(5)]),
  Image: new FormControl(""),
  Price:new FormControl(null,[Validators.required ]),
  cat:new FormControl("",[Validators.required]),
  Counter:new FormControl(1,[Validators.required]),

})

newitem1(){
  var newitem = this.addform.value
  console.log(newitem)
  this.server.additem(newitem).subscribe()
  this.dialogRef.close();

    window.location.reload();
}




}
