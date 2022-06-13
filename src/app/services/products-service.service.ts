import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopProduct } from '../interfaces/top-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  projectorUrl: string = 'http://localhost:3300/api/top-cat-products/projector';
  googleGlassUrl: string = 'http://localhost:3300/api/top-cat-products/googleglass';
  headPhoneUrl: string = 'http://localhost:3300/api/top-cat-products/headphone';
  lightUrl: string = 'http://localhost:3300/api/top-cat-products/light';
  laptopUrl: string = 'http://localhost:3300/api/top-cat-products/laptop';

  constructor(private http: HttpClient) {}

  getAllProjectorTopCatProducts(): Observable<{success:boolean,message:string,data:TopProduct[]}> {
    return this.http.get<{success:boolean,message:string,data:TopProduct[]}>(this.projectorUrl);
  }
  getAllGoogleGlassTopCatProducts(): Observable<{success:boolean,message:string,data:TopProduct[]}> {
    return this.http.get<{success:boolean,message:string,data:TopProduct[]}>(this.googleGlassUrl);
  }
  getAllHeadPhoneTopCatProducts(): Observable<{success:boolean,message:string,data:TopProduct[]}> {
    return this.http.get<{success:boolean,message:string,data:TopProduct[]}>(this.headPhoneUrl);
  }
  getAllLightTopCatProducts(): Observable<{success:boolean,message:string,data:TopProduct[]}> {
    return this.http.get<{success:boolean,message:string,data:TopProduct[]}>(this.lightUrl);
  }
  getAllLaptopTopCatProducts(): Observable<{success:boolean,message:string,data:TopProduct[]}> {
    return this.http.get<{success:boolean,message:string,data:TopProduct[]}>(this.laptopUrl);
  }


}
