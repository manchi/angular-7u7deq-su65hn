import { Injectable } from '@angular/core';
import { AdminUnit } from './adminUnit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  constructor(private http: HttpClient) {
    //this.items: Product[] = [];
  }
  /*
  addToCart(item: AdminUnit) {
    //console.log('product parameters: ', product);
    this.items.push(item);
    //console.log("what's in our carts? ", this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  */
  getData(){
    return this.http.get('assets/fr_departements.json');
  }


}

/*




import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

    id: number;
    name: string;
    kind: string;
    children?: AdminUnit[];


@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {
    //this.items: Product[] = [];
  }

  addToCart(product: Product) {
    //console.log('product parameters: ', product);
    this.items.push(product);
    //console.log("what's in our carts? ", this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  //constructor() {}
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
*/
