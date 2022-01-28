import {Routes} from '@angular/router';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './shared/home/home.component';

export const routes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'contactus', component:ContactComponent},
    {path:'aboutus', component:AboutComponent},
    {path:'menu', component:MenuComponent},
    {path:'dishdetail/:id', component:DishdetailComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
