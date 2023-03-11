import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark = false;


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    console.log('init');

    const themeLink = this.document.createElement('link');
    themeLink.id = 'aio-custom-theme';
    themeLink.rel = 'stylesheet';
    themeLink.href = `assets/${this.getThemeName()}-theme.css`;
    this.document.head.appendChild(themeLink);
  }

  getThemeName(): string {
    return this.isDark ? 'dark' : 'light';
  }

  onToggleTheme(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  updateRenderedTheme(): void {
    const customLinkElement = this.document.getElementById('aio-custom-theme') as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `assets/${this.getThemeName()}-theme.css`;
    }
  }

}
