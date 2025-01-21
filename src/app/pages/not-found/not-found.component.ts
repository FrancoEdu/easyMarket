import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ImageComponent } from '../../components/image/image.component';
import { SubTitleComponent } from '../../components/sub-title/sub-title.component';
import { TitleComponent } from '../../components/title/title.component';
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';

@Component({
  selector: 'app-not-found',
  imports: [TitleComponent, SubTitleComponent, ButtonComponent, ImageComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(
    private readonly _router: Router,
  ){

  }

  handleClickGoBack(): void {
    this._router.navigate([RoutesPath.HOME]);
  }
}
