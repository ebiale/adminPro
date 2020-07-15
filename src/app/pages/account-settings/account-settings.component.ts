import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
  }

  changeColor(color: string, link: ElementRef) {
    const url = `assets/css/colors/${color}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.applyCheck(link);
  }

  private applyCheck(link: any) {
    const selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}
