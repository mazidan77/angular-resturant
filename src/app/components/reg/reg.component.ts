import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {



  addform = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[Validators.required,Validators.min(15),Validators.max(40)]),
    address:new FormControl("",[Validators.required ]),
    email:new FormControl("",[Validators.required,Validators.email]),
    phone:new FormControl("",[Validators.required])
  })

 get name(){
  return this.addform.get('name')
}

get age(){
  return this.addform.get('age')
}

get address(){
  return this.addform.get('address')
}
get email(){
  return this.addform.get('email')
}

get phone(){
  return this.addform.get('phone')
}


}
