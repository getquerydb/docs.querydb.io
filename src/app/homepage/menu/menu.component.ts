import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  isSidebarOpened = true;
  readonly items = [
    {
      title: 'Introduction',
      isOpened: false,
      path: '/',
    },
    {
      title: 'Databases Drivers',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/providers/overview', slug: '' },
        { title: 'MariaDB', path: '/providers/overview' , slug: "mariadb" },
        { title: 'MSSQL', path: '/providers/overview' , slug: "mssql" },
        { title: 'MySQL', path: '/providers/overview' , slug: "mysql" },
        { title: 'Oracle', path: '/providers/overview', slug: "oracle"  },
        { title: 'PostgreSQL', path: '/providers/overview', slug: "postgresql" },
      ],
    },
    /*{
      title: 'Plugins',
      isOpened: false,
      children: [
        { title: 'Build Plugin', path: '/plugin' }
      ],
    },*/
    {
      title: 'Support us',
      isOpened: false,
      path: '/support',
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe((event) => this.toggleCategory());

    this.toggleCategory();
  }

  toggleCategory() {
    const { firstChild } = this.route.snapshot;
    if (
      (firstChild.url && firstChild.url[1]) ||
      (firstChild.url &&
        firstChild.routeConfig &&
        firstChild.routeConfig.loadChildren)
    ) {
      const { path } = firstChild.url[0];
      const index = this.items.findIndex(
        ({ title }) => title.toLowerCase() === path,
      );
      if (index < 0) {
        return;
      }
      this.items[index].isOpened = true;
      this.items[1].isOpened = false;
    }
  }
}
