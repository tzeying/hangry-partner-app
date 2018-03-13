import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hangry-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() title: string;
  text: string;

  constructor() {
    // console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }

}
