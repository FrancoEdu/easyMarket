import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type buttonTypeStyleProps = 'outline' | 'full' | 'delete'

@Component({
  selector: 'app-button',
  imports: [NgClass, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  buttonTitleText = input<string>('Clique aqui');
  variant = input<buttonTypeStyleProps>('outline');
  useSvgIcon = input<boolean>(false);
  iconPath = input<string>('home');
  isDisabled = input<boolean>(false);

  handleClickButton = output<void>();

  handleClick() {
    this.handleClickButton.emit();
  }
}
