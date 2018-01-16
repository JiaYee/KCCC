// import { Component } from '@angular/core';
// import { NavController, NavParams,LoadingController ,ViewController ,
//   PopoverController,ToastController
// ,AlertController
// } from 'ionic-angular';
// import { PhotoViewer } from 'ionic-native';
// import{Servercon} from '../../providers/servercon';
// import{SublistPage} from '../sublist/sublist';
// import{EarthPage} from '../earth/earth';
// import{EventPage} from '../event/event';
// import{FavePage} from '../fave/fave';
// import{AboutusPage} from '../aboutus/aboutus';
// import{AddcategoryPage} from '../addcategory/addcategory';
//
// 
// @Component({
//   template: `
//     <ion-list color="light">
//       <button ion-item icon-right>Add Main Category </button>
//       <button ion-item >Add Content</button>
//       <button ion-item  >Edit Subcategory</button>
//       </ion-list>
//       `
// })
//
// export class SubPage {
//   id:any;
//  aboutpage:any;
//  sts:any;
//  sts1:any;
//   constructor(public viewCtrl: ViewController, public navParams: NavParams,public loadingCtrl: LoadingController,
//   public ss:Servercon,public toastCtrl: ToastController,
//   public navCtrl: NavController,
//   private alertCtrl: AlertController) {
//
//
//   }
//
//
// }
//
// @Component({
//   template: `
//      <ion-list color="light">
//       <button ion-item  icon-right>Admin</button>
//        <!-- (click)="presentPopover($event)" -->
//        <button ion-item (click)="validationPop()">Validation Code</button>
//       <button *ngIf="adminonly()"  ion-item  (click)="logout()">Logout</button>
//        </ion-list>
//       `
// })
// export class MorePage {
//   id:any;
//  aboutpage:any;
//
//   constructor(public viewCtrl: ViewController, public navParams: NavParams,public loadingCtrl: LoadingController,
//   public ss:Servercon,public toastCtrl: ToastController,public popoverCtrl: PopoverController,
//   public navCtrl: NavController,
//
//    private alertCtrl: AlertController) {
//
// this.id = this.navParams.get("id");
// this.aboutpage =AboutusPage;
//
//
//   }
//
//
//
//  presentToast(msg:string) {
//     let toast = this.toastCtrl.create({
//       message: msg,
//       duration: 2000,
//        position: 'middle'
//     });
//     toast.present();
//   }
//
//
//
//
//
// addme(seg:string)
//
// {
//
//
//   this.viewCtrl.dismiss();
// }
//
//
//
// validationPop()
// {
//
//  let alert = this.alertCtrl.create({
//     title: 'Login',
//     inputs: [
//       {
//         name: 'username',
//         placeholder: 'Username'
//       },
//       {
//         name: 'password',
//         placeholder: 'Password',
//         type: 'password'
//       }
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: data => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Login',
//         handler: data => {
//          let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });
// loading.present();
//
//  this.ss.dataList("verification_code="+data.password,"validateVerificationCode.php").then((response)=>{
//
// let myname =data.username;
//
// loading.dismiss();
//  data =response;
//
// if(data.data.status)
// {
// this.ss.saveData("myname",myname);
// this.ss.saveData("loginSts","1");
// this.presentToast("login successful");
// }
// else
// {
// this.presentToast("login failed");
// }
//   }).catch((Error)=>{
// console.log("Connection Error"+Error);
// loading.dismiss();
//     });
//
//
//         }
//       }
//     ]
//   });
//   alert.present();
//  this.viewCtrl.dismiss();
//
// }
//
// page()
// {
//   this.viewCtrl.dismiss();
//
// }
// presentPopover(myEvent) {
//   this.viewCtrl.dismiss();
//     let popover = this.popoverCtrl.create(SubPage);
//     popover.present({
//       ev: myEvent
//
//     });
//   }
//
// logout()
// {
//   this.ss.deleteData("loginSts");
//   this.ss.deleteData("myname");
//   this.presentToast("Logout successful");
//  this.viewCtrl.dismiss();
// }
//
//
// adminonly()
// {
//  if(this.ss.readData("loginSts"))
//  return true;
//  else
//  return false;
// }
//
//
// }
//
//
//
//
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
// slides:any;
// items:any;
// backup_items:any;
// earthpage:any;
// eventpage:any;
// favepage:any;
// addcategorypage:any;
// showme:boolean;
//   constructor(public navCtrl: NavController, public navParams: NavParams,public ss:Servercon,
//   public loadingCtrl: LoadingController,public popoverCtrl: PopoverController,
//   private alertCtrl: AlertController
//   ) {
// this.earthpage = EarthPage;
// this.eventpage=EventPage;
// this.favepage=FavePage;
// this.showme=false;
// this.addcategorypage=AddcategoryPage;
//   }
//
//   ionViewDidLoad() {
//  this.listBanner();
//  this.listitem();
//
//   }
//
//
// listBanner()
// {
//
//
// let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });
// loading.present();
//  this.ss.banner().then((response)=>{
//
//
// this.slides =response;
// this.slides=this.slides.Data;
// console.log();
// loading.dismiss();
//   }).catch((Error)=>{
// console.log("Connection Error"+Error);
// loading.dismiss();
//     });
// }
//
// listitem()
// {
//
//
// let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });
// loading.present();
//  this.ss.dataList("type=1&start=0","getMainCategoryDataByType.php").then((response)=>{
//
//
// this.items =response;
// this.items=this.items.Data;
// this.backup_items= this.items;
// loading.dismiss();
//   }).catch((Error)=>{
// console.log("Connection Error"+Error);
// loading.dismiss();
//     });
// }
//
//
//  listimage(imageurl:string)
// {
//
// let myStyles ={
//   'background':'url('+imageurl+') no-repeat',
//   'background-size':'100% 100%'
// }
//
// return myStyles;
//
// }
//
//
// openPage(item)
// {
//
//
//   this.navCtrl.push(SublistPage,item);
// }
//
//
//  getItems(ev: any) {
//     // Reset items back to all of the items
//
//
//     // set val to the value of the searchbar
//     let val = ev.target.value;
//
//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
// else
// {
//   this.items=this.backup_items;
// }
// }
//
//
// onCancel(onCancel)
// {
// this.items=this.backup_items;
// this.showme=false;
// }
//
// seachshow()
// {
// if(this.showme==false)
//  this.showme=true;
//  else
//  this.showme=false;
//
// }
//
// view_photo(image_path:string,title:string)
// {
// PhotoViewer.show(image_path,title);
//
// }
//
// presentPopover(myEvent) {
//     let popover = this.popoverCtrl.create(MorePage);
//     popover.present({
//       ev: myEvent
//
//     });
//   }
//
//
// adminonly()
// {
//  if(this.ss.readData("loginSts"))
//  return true;
//  else
//  return false;
// }
//
//
//
//
// }
