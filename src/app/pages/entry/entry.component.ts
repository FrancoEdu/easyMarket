import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ImageComponent } from '../../components/image/image.component';
import { SubTitleComponent } from '../../components/sub-title/sub-title.component';
import { TitleComponent } from '../../components/title/title.component';
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';

@Component({
  selector: 'app-entry',
  imports: [TitleComponent, SubTitleComponent, ButtonComponent, ImageComponent],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  constructor(
    private readonly _router: Router,
  ) {}

  handleClickGoHome(): void {
    this._router.navigate([RoutesPath.HOME]);
  }
}
