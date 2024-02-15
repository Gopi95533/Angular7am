import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FakeproductsService } from '../fakeproducts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cartAdd=new EventEmitter<void>
  products: any;
  c!:number;
  constructor(private fs: FakeproductsService)
  {

  }
  ngOnInit()
  {
    this.fs.getData().subscribe((data)=>this.products=data.products)
  }
  add(item:any)
  {
    this.fs.add(item)
  }

}
