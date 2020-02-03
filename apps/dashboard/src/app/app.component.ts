import { Component } from '@angular/core';
import { AuthGuard } from '@mdv-ten/core-data';
import { AuthService } from '@mdv-ten/core-data';

@Component({
  selector: 'mdv-ten-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: 'projects', icon: 'work', title: 'projects' }
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;

  constructor(private authService: AuthService) {}
}
