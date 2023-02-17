import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  message:any=''

constructor(private service:SharedService){

  this.service.sharedvalue$.subscribe((x)=>this.message=x)

}

}

