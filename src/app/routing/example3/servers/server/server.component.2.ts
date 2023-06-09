import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from 'express-serve-static-core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-2',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent2 implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.server = data['server'];
    });
  }

  editServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
