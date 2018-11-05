import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatCardModule 
} from '@angular/material';

import { OrderComponent } from './order/order.component';
import { GoodComponent } from './good/good.component'
import { GoodsService } from './goods.service';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    GoodComponent,
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatCardModule,
    NgxDatatableModule,
    FormsModule, 
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
    ShopRoutingModule,
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
