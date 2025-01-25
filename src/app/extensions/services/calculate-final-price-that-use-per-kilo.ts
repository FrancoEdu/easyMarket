import { ICalculateFinalPrice } from "../interfaces/calculate-final-price.interface";

export class CalculateFinalPriceProductsThatUsePerKilo implements ICalculateFinalPrice {
  calculateFinalPrice(dataOne: number, dataTwo: number): number {
    const kilo = dataOne;
    const pricePerKilo = dataTwo;
    return kilo * pricePerKilo;
  }
}