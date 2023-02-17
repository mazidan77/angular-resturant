import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  meals:any=''
  filttermeals:any=''




  /**
   *
   */


  constructor(private server:ServerService) {




    this.filttermeals=this.meals


    this.server.getall().subscribe({
      next:(data)=>{this.meals=data},
      error:(error)=>{console.log(error)}

    })





    this.filttermeals=this.meals



  //  this.meals=[
  //   {Name:'Quinoa Salad with Mushroom',Image:"../../../assets/imgs/salad/1.jpg", Price:"125.00 EGP" ,cat:"salad" ,Counter:1 },
  //   {Name:'Grilled Chicken Peach Salad',Image:"../../../assets/imgs/salad/2.jpg", Price:"160.00 EGP" ,cat:"salad" ,Counter:1 },
  //   {Name:'Mango Salad',Image:"../../../assets/imgs/salad/3.jpg", Price:"120.00 EGP" ,cat:"salad" ,Counter:1 },
  //   {Name:'Napoletana',Image:"../../../assets/imgs/pizaa/1.jpg", Price:"135.00 EGP" ,cat:"pizza" ,Counter:1 },
  //   {Name:'Italian Bresaola',Image:"../../../assets/imgs/pizaa/8c198874-91d6-47b5-b005-d7ffe3b46452.jpg", Price:"205.00 EGP" ,cat:"pizza" ,Counter:1 },
  //   {Name:'Homemade Lasagna',Image:"../../../assets/imgs/pasta/1.jpg", Price:"160.00 EGP" ,cat:"pasta" ,Counter:1 },
  //   {Name:'Risotto Porcini',Image:"../../../assets/imgs/pasta/2.jpg", Price:"270.00 EGP" ,cat:"pasta" ,Counter:1 },
  //   {Name:'Shrimp Thai Red Curry',Image:"../../../assets/imgs/tawagan/1.jpg", Price:"290.00 EGP" ,cat:"tawagen" ,Counter:1 },
  //   {Name:'Molokhia',Image:"../../../assets/imgs/tawagan/2.jpg", Price:"175.00 EGP" ,cat:"tawagen" ,Counter:1 },
  //   {Name:'Vegetable Thai Red Curry',Image:"../../../assets/imgs/tawagan/3.jpg", Price:"200.00 EGP" ,cat:"tawagen" ,Counter:1 },

  //  ]


  }


  ngOnInit() {

    }

  applyfilter(event:Event){
    let filttervalue = (event.target as HTMLInputElement).value
    this.filttermeals=this.meals.filter((x:any)=>x.Name.toLowerCase().includes(filttervalue.toLowerCase()))



    console.log(this.filttermeals)
  }

  cats = ['All','Salad', 'Pizza', 'Tawagen', 'Pasta'];

show(s:any){


  this.filttermeals=this.meals.filter((x:any)=>x.cat==s.toLowerCase())
  if(s=='All' ){

  this.filttermeals=this.meals
  }
}

  }


