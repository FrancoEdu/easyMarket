import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  placeholder = input<string>("Pesquise pelo produto...");
  valueTextInput = output<string>();

  inputValue: string = '';

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    this.valueTextInput.emit(this.inputValue);
  }
}
