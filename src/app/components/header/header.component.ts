import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
// tslint:disable-next-line: ban-types
  @Input() titulo: String;

  constructor() { }

  ngOnInit() {}

}
