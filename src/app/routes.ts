import {Routes} from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './shared/home/home.component';

export const routes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'menu', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'aboutus', component:AboutComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
