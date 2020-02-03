import { Routes, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdv-ten-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() userIsAuthenticated$;
  @Input() title;
  @Input() sidenav;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

}
