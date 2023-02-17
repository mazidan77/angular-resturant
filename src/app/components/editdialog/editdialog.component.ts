import { Component } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent {

meal:any;
id=this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public server:ServerService ,public router:Router,private dialogRef: MatDialogRef<EditdialogComponent> ) {


    server.getbyid(this.data).subscribe({
      next:(data)=>{this.meal=data}

      })
   }


   ubdate1(Name:any , cat:any , Price:number ,Image:any , Counter:any ){

    var upuser ={ Name:Name , cat:cat, Price:Price ,Image:Image ,Counter:Counter}
    this.server.updateitem(this.id , upuser).subscribe(
    )
    this.dialogRef.close();

    window.location.reload();
      }
}


