import { CategoryOfProducts, _productsThatUsePerKilo, _productsThatUseQuantity } from "../../enums/category-of-food";
import { ICalculateFinalPrice } from "../interfaces/calculate-final-price.interface";
import { CalculateFinalPriceProductsThatUsePerKilo } from "../services/calculate-final-price-that-use-per-kilo";
import { CalculateFinalPriceThatUseQuantity } from "../services/calculate-final-price-that-use-quantity";

export class FinalPriceCalculatorFactory {
  static createCalculator(category: CategoryOfProducts): ICalculateFinalPrice {
    if (_productsThatUsePerKilo.includes(category)) {
      return new CalculateFinalPriceProductsThatUsePerKilo();
    } else if (_productsThatUseQuantity.includes(category)) {
      return new CalculateFinalPriceThatUseQuantity();
    } else {
      throw new Error(`No calculator found for category: ${category}`);
    }
  }
}