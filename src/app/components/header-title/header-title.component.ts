import { Location } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-title',
  imports: [MatIconModule],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.scss'
})
export class HeaderTitleComponent {
  titleHeader = input<string>('Detalhes do produto');
  
  constructor(
    private readonly _location: Location
  ) { }

  handleClickGoBack(): void {
    this._location.back();
  }
}
