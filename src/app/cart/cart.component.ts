import { Component } from '@angular/core';
import { FakeproductsService } from '../fakeproducts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items:any[]=[]
  constructor(private fs:FakeproductsService){

  }
  ngOnInit()
  {
    this.items=this.fs.getItems();
    console.log(this.items)

  }
  remove(index:number)
  {
    this.items.splice(index,1);
    this.fs.rem()
  }

  


}
