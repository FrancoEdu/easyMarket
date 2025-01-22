import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleComponent } from "../../components/header-title/header-title.component";
import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-details',
  imports: [HeaderTitleComponent, ImageComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  id!: string;

  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.handleProductId();
  }

  private handleProductId(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')!;
    });
  }
}