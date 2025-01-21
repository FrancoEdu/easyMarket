import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
