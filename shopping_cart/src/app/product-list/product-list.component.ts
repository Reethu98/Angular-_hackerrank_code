import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, UpdateMode} from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {}
  OnAddCartClick(product: any){
    this.onAddToCart.emit(product);
  }
  onQuantityChange(product, quantity){
    // console.log(product,quantity);
    // const index1 = this.products.findIndex(p=>p.id===product.id);
    product.cartQuantity = quantity
    this.onQuantityUpdate.emit(product);
  }
}


