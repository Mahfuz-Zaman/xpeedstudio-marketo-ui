import { Component, OnInit } from '@angular/core';
import { TopProduct } from 'src/app/interfaces/top-product.interface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  lightProducts: TopProduct[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllLightProducts();
  }

  getAllLightProducts() {
    this.productService.getAllLightTopCatProducts().subscribe((response) => {
      this.lightProducts = response.data;
    });
  }
}
