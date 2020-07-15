import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private themeLink = document.querySelector('#theme');
  constructor() {
    this.themeLink.setAttribute('href', localStorage.getItem('theme') || 'assets/css/colors/${default-dark}.css');
  }

  changeTheme(color: string, links) {
    const url = `assets/css/colors/${color}.css`;
    this.themeLink.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme(links);
  }

  checkCurrentTheme(links) {
    links.forEach ( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const urlTheme = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeLink.getAttribute('href');
      if (currentTheme === urlTheme) {
        elem.classList.add('working');
      }
    });
  }
}
