import { Component, OnInit } from '@angular/core';
import { TopProduct } from 'src/app/interfaces/top-product.interface';
import { ProductsService } from 'src/app/services/products-service.service';


@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.scss']
})
export class ProjectorComponent implements OnInit {

  projectorProducts:TopProduct[]=[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProjectorProducts();
  }

  getAllProjectorProducts(){
    this.productsService.getAllProjectorTopCatProducts()
    .subscribe(response => this.projectorProducts = response.data);
  }

}
