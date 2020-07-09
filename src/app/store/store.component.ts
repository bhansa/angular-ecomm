import { Cart } from "./cart.module";
import { ProductRepository } from "./../../Model/product.repository";
import { Product } from "./../../Model/Product.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  public selectedCategory;
  public productsPerPage = 4;
  public selectedPage = 1;
  constructor(
    private repository: ProductRepository,
    public cart: Cart,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  get products(): Product[] {
    const pageIndex = this.selectedPage * this.productsPerPage;
    console.log("store:::", this.selectedCategory);
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    console.log("store category:::", newCategory);
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }
}
