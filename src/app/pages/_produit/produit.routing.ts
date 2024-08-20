import { Routes } from "@angular/router";
import { ListComponent } from "./_components/list/list.component";
import { AddComponent } from "./_components/add/add.component";

export const productRouting:Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
]
