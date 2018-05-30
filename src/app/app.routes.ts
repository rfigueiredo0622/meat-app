import { Routes } from '@angular/router/src/config';
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' }, // torna o MenuComponent default.
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]},
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'order', component: OrderComponent },
    { path: 'order-summary', component: OrderSummaryComponent },
];
