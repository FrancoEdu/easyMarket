import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { StorageKeys } from '../enums/storage-keys';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly _localStorage: StorageService) { }

  /**
   * Obtém todos os produtos armazenados.
   * @returns Lista de produtos.
   */
  getAllProducts(): Product[] {
    return this._localStorage.getItem<Product[]>(StorageKeys.PRODUCTS) ?? [];
  }

  /**
   * Obtém um produto pelo ID.
   * @param id ID do produto.
   * @returns Produto encontrado ou null.
   */
  getProductById(id: string): Product | null {
    const products = this.getAllProducts();
    return products.find(product => product.Id === id) || null;
  }

  /**
   * Adiciona um novo produto ao armazenamento.
   * @param product Produto a ser adicionado.
   */
  addProduct(product: Product): void {
    const products = this.getAllProducts();
    products.push(product);
    this.saveProducts(products);
  }

  /**
   * Atualiza um produto existente.
   * @param product Produto atualizado.
   */
  updateProduct(product: Product): void {
    const products = this.getAllProducts();
    const index = products.findIndex(p => p.Id === product.Id);

    if (index !== -1) {
      products[index] = product;
      this.saveProducts(products);
    } else {
      console.error(`Produto com ID ${product.Id} não encontrado para atualização.`);
    }
  }

  /**
   * Remove um produto pelo ID.
   * @param id ID do produto a ser removido.
   */
  removeProduct(id: string): void {
    let products = this.getAllProducts();
    products = products.filter(product => product.Id !== id);
    this.saveProducts(products);
  }

  /**
   * Limpa todos os produtos armazenados.
   */
  clearProducts(): void {
    this._localStorage.removeItem(StorageKeys.PRODUCTS);
  }

  /**
   * Pesquisa produtos pelo texto.
   * @param text Texto a ser pesquisado.
   */
  searchByText(text: string): Product[] {
    const products = this.getAllProducts();
    return products.filter(product => product.Name.toLowerCase().includes(text.toLowerCase()));
  }

  /**
   * Retorna o preço final da compra
   */
  getFinalPriceOfProductList(): number {
    const products = this.getAllProducts();
    return products.reduce((total, product) => total + product.Price, 0);
  }

  /**
   * Salva a lista de produtos no this._localStorage.
   * @param products Lista de produtos a ser salva.
   */
  private saveProducts(products: Product[]): void {
    this._localStorage.setItem(StorageKeys.PRODUCTS, products);
  }
}
