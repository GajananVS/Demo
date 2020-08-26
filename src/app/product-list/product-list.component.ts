import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productform: any;
  allProduct: Product[];
  dataSaved = false;
  productIDUpdate = null;
  message = null;
  IsHideSubmitForm = false;
  IsHideFetchForm = false;
  user: any;
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) { }
  ngOnInit(): void {
    if (localStorage.getItem('username') !== 'admin') {
      this.router.navigate(['/']);
    }
    this.productform = this.formbuilder.group({
      ProductID: '',
      ProductName: ['', [Validators.required]],
      Description: '',
      Price: '',
      AddedOn: '',
      IsActive: ''
    });
    this.loadProducts();
    this.IsHideSubmitForm = false;
  }
  loadProducts(): any {
    this.productService.getProducts().subscribe( result => {
      this.allProduct = result;
    });
  }
  resetForm(): void {
    this.productform.reset();
    this.message = null;
    this.dataSaved = false;
  }
  onFormSubmit() {
    alert('hello button clicked');
    this.dataSaved = false;
    const product = this.productform.value;
    this.createProduct(product);
    this.resetForm();
    this.IsHideSubmitForm = true;
  }
  loadProduct(productID: string): any {
    this.IsHideSubmitForm = false;
    this.productService.getProduct(productID).subscribe( result => {
      this.message = null;
      this.dataSaved = false;
      this.productIDUpdate = result.ProductID;
      this.productform.controls['ProductID'].setValue(result.ProductID);
      this.productform.controls['ProductName'].setValue(result.ProductName);
      this.productform.controls['Description'].setValue(result.Description);
      this.productform.controls['Price'].setValue(result.Price);
      this.productform.controls['IsActive'].setValue(result.IsActive);
    });
  }
  createProduct(product: Product): any {
    if (this.productIDUpdate == null)
    {
      product.ProductID = 0;
      product.IsActive = true;
      this.productService.createProduct(product).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record created';
          this.loadProducts();
          this.productIDUpdate = null;
          this.resetForm();
        });
    }
    else{
      product.ProductID = this.productIDUpdate;
      this.productService.updateProducts(this.productIDUpdate, product).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record updated !';
          this.loadProducts();
          this.productIDUpdate = null;
          this.resetForm();
        });
    }
  }
  deleteProduct(productID: string): void {
    if (confirm('Do you want to delete the record ?')){
      this.productService.deleteProducts(productID).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record delete';
          this.loadProducts();
          this.productIDUpdate = null;
          this.resetForm();
        });
    }
  }
  onNotify(): void {
      window.alert('You will be notified when the product goes on sale');
  }
}
