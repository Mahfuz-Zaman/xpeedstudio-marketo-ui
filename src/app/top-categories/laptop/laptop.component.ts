import { Component, OnInit } from '@angular/core';
import { TopProduct } from 'src/app/interfaces/top-product.interface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  laptopProducts: TopProduct[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllLaptopProducts();
  }

  getAllLaptopProducts() {
    this.productService.getAllLaptopTopCatProducts().subscribe((response) => {
      this.laptopProducts = response.data;
    });
  }
}
