import { v4 as uuidv4 } from 'uuid';
import { _productsThatUsePerKilo, CategoryOfProducts } from '../enums/category-of-food';
import { FinalPriceCalculatorFactory } from '../extensions/factory/final-price-calculator.factory';

export class Product {
  Id: string;
  Name: string;
  CategoryOfProduct: CategoryOfProducts;
  Price: number;
  PricePerKilo?: number;
  Kilo?: number;
  Quantity?: number;
  UnitOrBale?: boolean;
  UnitPrice?: number;

  constructor(name: string, categoryOfProduct: CategoryOfProducts, pricePerKilo?: number, 
    quantity?: number, unitOrBale?: boolean, unitPrice?: number) 
  {
    this.Id = uuidv4().toString();
    this.Name = name;
    this.CategoryOfProduct = categoryOfProduct;
    this.UnitOrBale = unitOrBale;
    this.UnitPrice = unitPrice;
    this.PricePerKilo = pricePerKilo;
    this.Quantity = quantity;
    this.Price = 0;
    
    this.updateFinalPrice();
  }

  private updateFinalPrice(): void {
    const calculator = FinalPriceCalculatorFactory.createCalculator(this.CategoryOfProduct);
    this.Price = calculator.calculateFinalPrice(this.Kilo ?? this.Quantity ?? 0, this.PricePerKilo ?? this.UnitPrice ?? 0);
  }
}