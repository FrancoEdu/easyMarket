import { ICalculateFinalPrice } from "../interfaces/calculate-final-price.interface";

export class CalculateFinalPriceThatUseQuantity implements ICalculateFinalPrice {
  calculateFinalPrice(dataOne: number, dataTwo: number): number {
    const quantity = dataOne;
    const pricePerUnit = dataTwo;
    return quantity * pricePerUnit
  }
}