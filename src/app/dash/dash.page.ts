import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  orders = [
      
          { "label": "order1", id:1}, 
          { "label": "order2", id:2},
          { "label": "order3", id:3},
        ];

  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router
  ) { }

  doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove her from the NativeStorage
      this.nativeStorage.remove('google_user');
      console.log("removed google_user");
      this.router.navigate(["login"]);
    }, err => {
      console.log(err);
    });
  } 
  ngOnInit() {
    this.nativeStorage.getItem('google_user')
    .then( data => {
      //user is previously logged and we have his data
      //we will let him access the app
      console.log( "google user available. stay on this page")
    }, err => {
      console.log( "google user not logged in, redirect to login")
      this.router.navigate(["login"]);
    })
  }

  buttonClick(id: number){
    console.log("got a click " + id);
    this.router.navigate(["orderdetail"])
  }

}
