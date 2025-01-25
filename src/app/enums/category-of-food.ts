export enum CategoryOfProducts {
  PRODUCE = "Produce", // HORTIFRÚTI: frutas, vegetais e legumes
  BAKERY = "Bakery", // PADARIA: pães, bolos e doces
  DAIRY = "Dairy", // LATICÍNIOS: leite, queijos, iogurtes
  MEAT_AND_SEAFOOD = "MeatAndSeafood", // CARNES E FRUTOS DO MAR
  FROZEN_FOODS = "FrozenFoods", // CONGELADOS: alimentos congelados
  BEVERAGES = "Beverages", // BEBIDAS: refrigerantes, sucos e água
  SNACKS = "Snacks", // LANCHES: salgadinhos, biscoitos e snacks
  PANTRY = "Pantry", // DESPENSA: alimentos secos e enlatados
  HOUSEHOLD = "Household", // UTILIDADES DOMÉSTICAS: produtos de limpeza e utensílios
  HEALTH_AND_BEAUTY = "HealthAndBeauty", // SAÚDE E BELEZA: cosméticos e produtos de higiene
  BABY = "Baby", // BEBÊS: fraldas, alimentos infantis e produtos para bebês
  PETS = "Pets", // ANIMAIS DE ESTIMAÇÃO: ração e acessórios para pets
  ALCOHOL = "Alcohol", // ÁLCOOL: vinhos, cervejas e destilados
  PHARMACY = "Pharmacy", // FARMÁCIA: medicamentos e suplementos
  ELECTRONICS = "Electronics", // ELETRÔNICOS: aparelhos eletrônicos e acessórios
  CLOTHING = "Clothing", // VESTUÁRIO: roupas e acessórios
  SEASONAL = "Seasonal", // SAZONAIS: produtos para festas e datas comemorativas
  DELI = "Deli", // ROTISSERIA: comidas prontas e frios
}

export const _productsThatUsePerKilo: CategoryOfProducts[] = [
  CategoryOfProducts.PRODUCE,
  CategoryOfProducts.BAKERY,
  CategoryOfProducts.MEAT_AND_SEAFOOD,
  CategoryOfProducts.DELI,
];

export const _productsThatUseQuantity: CategoryOfProducts[] = [
  CategoryOfProducts.ALCOHOL,
  CategoryOfProducts.DAIRY,
  CategoryOfProducts.FROZEN_FOODS,
  CategoryOfProducts.BEVERAGES,
  CategoryOfProducts.SNACKS,
  CategoryOfProducts.PANTRY,
  CategoryOfProducts.HOUSEHOLD,
  CategoryOfProducts.HEALTH_AND_BEAUTY,
  CategoryOfProducts.BABY,
  CategoryOfProducts.PETS,
  CategoryOfProducts.PHARMACY,
  CategoryOfProducts.ELECTRONICS,
  CategoryOfProducts.CLOTHING,
  CategoryOfProducts.SEASONAL,
];