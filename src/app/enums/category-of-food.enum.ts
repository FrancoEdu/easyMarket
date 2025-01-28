export enum CategoryOfProducts {
  PRODUCE = "Hortifrúti", // HORTIFRÚTI: frutas, vegetais e legumes
  BAKERY = "Padaria", // PADARIA: pães, bolos e doces
  DAIRY = "Laticínios", // LATICÍNIOS: leite, queijos, iogurtes
  MEAT_AND_SEAFOOD = "Carnes e Frutos do Mar", // CARNES E FRUTOS DO MAR
  FROZEN_FOODS = "Congelados", // CONGELADOS: alimentos congelados
  BEVERAGES = "Bebidas", // BEBIDAS: refrigerantes, sucos e água
  SNACKS = "Lanches", // LANCHES: salgadinhos, biscoitos e snacks
  PANTRY = "Despensa", // DESPENSA: alimentos secos e enlatados
  HOUSEHOLD = "Utilidades Domésticas", // UTILIDADES DOMÉSTICAS: produtos de limpeza e utensílios
  HEALTH_AND_BEAUTY = "Saúde e Beleza", // SAÚDE E BELEZA: cosméticos e produtos de higiene
  BABY = "Bebês", // BEBÊS: fraldas, alimentos infantis e produtos para bebês
  PETS = "Animais de Estimação", // ANIMAIS DE ESTIMAÇÃO: ração e acessórios para pets
  ALCOHOL = "Álcool", // ÁLCOOL: vinhos, cervejas e destilados
  PHARMACY = "Farmácia", // FARMÁCIA: medicamentos e suplementos
  ELECTRONICS = "Eletrônicos", // ELETRÔNICOS: aparelhos eletrônicos e acessórios
  CLOTHING = "Vestuário", // VESTUÁRIO: roupas e acessórios
  SEASONAL = "Sazonais", // SAZONAIS: produtos para festas e datas comemorativas
  DELI = "Rotisseria", // ROTISSERIA: comidas prontas e frios
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

export function getCategoryLabel(category: keyof typeof CategoryOfProducts): string {
  const labels: { [key: string]: string } = {
    PRODUCE: 'Hortifrúti',
    BAKERY: 'Padaria',
    DAIRY: 'Laticínios',
    MEAT_AND_SEAFOOD: 'Carnes e Frutos do Mar',
    FROZEN_FOODS: 'Congelados',
    BEVERAGES: 'Bebidas',
    SNACKS: 'Lanches',
    PANTRY: 'Despensa',
    HOUSEHOLD: 'Utilidades Domésticas',
    HEALTH_AND_BEAUTY: 'Saúde e Beleza',
    BABY: 'Bebês',
    PETS: 'Animais de Estimação',
    ALCOHOL: 'Álcool',
    PHARMACY: 'Farmácia',
    ELECTRONICS: 'Eletrônicos',
    CLOTHING: 'Vestuário',
    SEASONAL: 'Sazonais',
    DELI: 'Rotisseria',
  };
  return labels[category] || category;
}