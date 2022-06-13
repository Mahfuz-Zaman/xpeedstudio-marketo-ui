import { Component, OnInit } from '@angular/core';
import { TopProduct } from 'src/app/interfaces/top-product.interface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.scss'],
})
export class HeadphoneComponent implements OnInit {
  headPhoneProducts: TopProduct[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllHeadPhoneProducts();
  }

  getAllHeadPhoneProducts() {
    this.productService
      .getAllHeadPhoneTopCatProducts()
      .subscribe((response) => {
        this.headPhoneProducts = response.data;
      });
  }
}
