import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsConfTest';

  constructor(private configService: ConfigService) {
    this.title = configService.appTitle;
  }
}
