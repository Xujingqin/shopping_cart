import { Component, OnInit} from '@angular/core';
import { Good } from '../goods';
import { GoodsService } from '../goods.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  /*subcount(name)
  {
    this.goods.forEach((item)=>{
      if(item.name === name){
        item.count--;
      }
    })
  }

 
  addcount(name)
  {
    this.goods.forEach((item)=>{
      if(item.name === name){
        item.count++;
      }
    })
  }*/
  order_list: Good [] = [];

  constructor(
    public router: Router,
    public goodsService: GoodsService
  ) { }

  ngOnInit() {
  }

  // 添加商品数量
  addIntoOrder(selected_goods: Good) {
      this.goodsService.goods.forEach((item: Good) => {
        if (item.id === selected_goods.id) {
          item.num ++ ;
        }
      });
  }

  // 减少商品数量，减少到0时，将商品移出购物车
  removeFromOrder(selected_goods: Good) {
    this.goodsService.goods.forEach((item: Good, index) => {
      if (item.id === selected_goods.id) {
        item.num -- ;
      }
      if (item.num === 0) {
        this.goodsService.goods.splice(index, 1);
      }
    });
  }

 
  delete(item)
  {
    this.goodsService.goods.splice(item,1);
  }
  
 
  sumprice=function(){  
    var pricetotal=0;
    this.goodsService.goods.forEach(item => {
     pricetotal+=item.num*item.price;
    });
    return pricetotal;
  }

  sumcount=function(){
    var counttotal=0;
    this.goodsService.goods.forEach(item=>{
      //if(item.getElementById("item").checked=true)
      counttotal+=item.num;
    });
    return counttotal;
  }
  goBack(){
  this.router.navigate(['/good']);
  }
}

