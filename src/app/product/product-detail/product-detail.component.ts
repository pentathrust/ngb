import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.paramMap.get('productId'))
    this.route.paramMap.subscribe(paramas => {
      //this.product = products[+paramas.get('productId')];
      const productObservable = this.productService.getProductById(paramas.get('productId'));
      productObservable.subscribe(
        (data) => { this.product = data; },
        (err) => {}
      )
    })
  }

}
