import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "first",
        loadChildren: "../first/first.module#FirstPageModule"
      },
      {
        path: "second",
        loadChildren: "../second/second.module#SecondPageModule"
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/first'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
