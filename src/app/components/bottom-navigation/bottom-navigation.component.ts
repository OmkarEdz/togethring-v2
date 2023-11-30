import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {
  constructor(private route: Router) { }


  data = [
    {
      icon: 'local_cafe',
      desc: 'T-Cafe',
      path: '/t-box',
    },
    {
      icon: 'chat',
      desc: 'T-Chat',
      path: '/partner-channel',
    },
    {
      icon: 'live_tv',
      desc: 'T-Box',
      path: '/t-box',
    }
  ];

  router(router: string) {
    this.route.navigateByUrl(router);
  }
  
  ngOnInit(): void {
  }

}
