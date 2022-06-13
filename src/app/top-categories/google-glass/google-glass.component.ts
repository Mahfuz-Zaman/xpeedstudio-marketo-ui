import { Component, OnInit } from '@angular/core';
import { TopProduct } from 'src/app/interfaces/top-product.interface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-google-glass',
  templateUrl: './google-glass.component.html',
  styleUrls: ['./google-glass.component.scss'],
})
export class GoogleGlassComponent implements OnInit {
  googleGlassProducts: TopProduct[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllGoogleGlassProducts();
  }

  getAllGoogleGlassProducts() {
    this.productsService
      .getAllGoogleGlassTopCatProducts()
      .subscribe((response) => {
        this.googleGlassProducts = response.data;
      });
  }
}
