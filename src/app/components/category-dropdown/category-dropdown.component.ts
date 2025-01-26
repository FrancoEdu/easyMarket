import { Component } from '@angular/core';
import { CategoryOfProducts } from '../../enums/category-of-food.enum';

@Component({
  selector: 'app-category-dropdown',
  imports: [],
  templateUrl: './category-dropdown.component.html',
  styleUrl: './category-dropdown.component.scss'
})
export class CategoryDropdownComponent {
  
  categories = Object.keys(CategoryOfProducts).map((key) => ({
    value: key,
    label: this.getCategoryLabel(key as keyof typeof CategoryOfProducts),
  }));

  private getCategoryLabel(category: keyof typeof CategoryOfProducts): string {
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
}
