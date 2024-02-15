import { Component, Input,OnChanges, OnInit } from '@angular/core';
import { FakeproductsService } from '../fakeproducts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   count!:number;
   constructor(private cartService:FakeproductsService){

   }
  ngOnInit()
  {
    this.cartService.cartSub$.subscribe((c) => this.count=c);
    console.log(this.count)
  }


}
