import { Component } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import {MatDialog} from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { NewdialogComponent } from '../newdialog/newdialog.component';

@Component({
  selector: 'app-managemenu',
  templateUrl: './managemenu.component.html',
  styleUrls: ['./managemenu.component.css']
})
export class ManagemenuComponent {

  meals:any='';
  m:any=1;
  uid:any;
  constructor( public serve:ServerService,public dialog: MatDialog ) {
    serve.getall().subscribe({
      next:(data)=>{this.meals=data},
      error:(error)=>{console.log(error)}

  })





  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width:'600px',
      data: data
    });
  }
  opennewDialog() {
    const dialogRef = this.dialog.open(NewdialogComponent, {
      width:'600px',

    });
  }



  delete1(id:any){
    this.serve.deleteitem(id).subscribe()
    window.location.reload();
  }
}


