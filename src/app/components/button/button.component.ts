import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

type buttonTypeStyleProps = 'outline' | 'full'

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  buttonTitleText = input<string>('Clique aqui');
  variant = input<buttonTypeStyleProps>('outline');
  useSvgIcon = input<boolean>(false);
  iconPath = input<string>('bi bi-arrow-left');

  handleClickButton = output<void>();

  handleClick() {
    this.handleClickButton.emit();
  }
}
