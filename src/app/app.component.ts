import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductNoChecker } from './checkers/product-no.checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: boolean;

  @ViewChild('productNo')
  private productNoElement: ElementRef;

  constructor(private productNoChecker: ProductNoChecker) {
  }

  onCheckProductNoClick() {
    const productNo = parseInt(this.productNoElement.nativeElement.value, 10);
    this.result = this.productNoChecker.check(productNo);
  }
}
