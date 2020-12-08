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
      title: 'Providers',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/providers/overview', slug: '' },
        { title: 'AS400', path: '/providers/overview', slug: "mysql" },
        { title: 'BgQuery', path: '/providers/overview', slug: "postgresql" },
        { title: 'Derby', path: '/providers/overview', slug: "oracle" },
        { title: 'DynamoDB', path: '/providers/overview' },
        { title: 'ElasticSearch', path: '/providers/overview' },
        { title: 'ExtenDB', path: '/providers/overview' },
        { title: 'FireBird', path: '/providers/overview' },
        { title: 'Google Analytics', path: '/providers/overview' },
        { title: 'Google Spanner', path: '/providers/overview' },
        { title: 'Google SpreadSheet', path: '/providers/overview' },
        { title: 'Graphite', path: '/providers/overview' },
        { title: 'Gupta', path: '/providers/overview' },
        { title: 'H2', path: '/providers/overview' },
        { title: 'Hive', path: '/providers/overview' },
        { title: 'Hypersonic', path: '/providers/overview' },
        { title: 'InfluxDB', path: '/providers/overview' },
        { title: 'Informix', path: '/providers/overview' },
        { title: 'Inges', path: '/providers/overview' },
        { title: 'Interbase', path: '/providers/overview' },
        { title: 'Json', path: '/providers/overview' },
        { title: 'Kingbase', path: '/providers/overview' },
        { title: 'Klyn', path: '/providers/overview' },
        { title: 'LucidDB', path: '/providers/overview' },
        { title: 'MariaDB', path: '/providers/overview' },
        { title: 'Mondrian', path: '/providers/overview' },
        { title: 'MonetDB', path: '/providers/overview' },
        { title: 'MongoDB', path: '/providers/overview' },
        { title: 'MS Access', path: '/providers/overview' },
        { title: 'MSSQL', path: '/providers/overview' },
        { title: 'MySQL', path: '/providers/overview' },
        { title: 'Neoview', path: '/providers/overview' },
        { title: 'Notezza', path: '/providers/overview' },
        { title: 'Oracle', path: '/providers/overview' },
        { title: 'PostgreSQL', path: '/providers/overview', slug: "postgresql" },
        { title: 'Prometheus', path: '/providers/overview' },
        { title: 'Redis', path: '/providers/overview' },
        { title: 'Redshift', path: '/providers/overview' },
        { title: 'SapDB', path: '/providers/overview' },
        { title: 'Script', path: '/providers/overview' },
        { title: 'Snowflake', path: '/providers/overview' },
        { title: 'Sqlite', path: '/providers/overview' },
        { title: 'Sysbase', path: '/providers/overview' },
        { title: 'Teradata', path: '/providers/overview' },
        { title: 'Universe', path: '/providers/overview' },
        { title: 'Vertica', path: '/providers/overview' }
      ],
    },
    {
      title: 'Plugins',
      isOpened: false,
      children: [
        { title: 'Build Plugin', path: '/plugin' }
      ],
    },
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
