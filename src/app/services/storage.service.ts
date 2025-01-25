import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private readonly _toastrService: ToastrService) { }

  /**
 * Salva um item no localStorage.
 * @param key Chave do item.
 * @param value Valor do item (será convertido em JSON).
 */
  setItem(key: string, value: any): void {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      this._toastrService.error('Erro ao salvar no localStorage');
      console.error('Erro ao salvar no localStorage', error);
    }
  }

  /**
   * Recupera um item do localStorage.
   * @param key Chave do item.
   * @returns O valor do item convertido de JSON para o tipo original, ou null se não existir.
   */
  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      this._toastrService.error('Erro ao recuperar do localStorage');
      console.error('Erro ao recuperar do localStorage', error);
      return null;
    }
  }

  /**
   * Remove um item do localStorage.
   * @param key Chave do item.
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      this._toastrService.error('Erro ao remover do localStorage');
      console.error('Erro ao remover do localStorage', error);
    }
  }

  /**
   * Limpa todo o localStorage.
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      this._toastrService.error('Erro ao limpar o localStorage');
      console.error('Erro ao limpar o localStorage', error);
    }
  }

  /**
   * Verifica se existe um item no localStorage.
   * @param key Chave do item.
   * @returns True se o item existir, false caso contrário.
   */
  hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
