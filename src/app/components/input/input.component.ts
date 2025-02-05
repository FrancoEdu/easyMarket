import { Component, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  placeholder = input<string>("Pesquise pelo produto...");
  valueTextInput = output<string>();
  type = input<string>('text');

  inputValue: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    this.onChange(this.inputValue); // Notifica o Angular sobre a mudança
    this.valueTextInput.emit(this.inputValue);
  }

  // Método para escrever o valor no componente
  writeValue(value: any): void {
    this.inputValue = value;
  }

  // Método para registrar a função de mudança
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Método para registrar a função de "touched"
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
