import { Component, OnInit, Output } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(private route: Router,
    private dialog:MatDialog,
    // public afAuth: AngularFireAuth,
    ) { }

    

  ngOnInit(): void {
    
  }
  openDialog() {
    // this.dialog.open(LoginComponent, {
    //   width: '500px',
    //   height: '500px'
    // });
  };

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
  

  @Output() changeState = new EventEmitter<any>();
  isLogin: boolean;
  opened: boolean = false;
  widthSideBar: string = '16.5%';
  widthSideBarExpanded: string = '16.5%';
  widthSideBarCollapsed: string = '5%';
  userDetails = null;
  user: Array<any> = [];
  

  // changeEvent() {
  //   this.changeState.emit(!this.opened);
  //   this.opened = !this.opened;
  // }
  
  
  toggleSideBar(){
    this.opened = !this.opened;
    if(this.widthSideBar == this.widthSideBarExpanded){
      this.widthSideBar = this.widthSideBarCollapsed;
    }
    else{
      this.widthSideBar = this.widthSideBarExpanded;
    }
    this.changeState.emit({opened: !this.opened, sidebarwidth: this.widthSideBar});
  }

  router(router: string) {
    this.route.navigateByUrl(router);
  }
  
}
