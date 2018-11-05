import { Component, OnInit } from '@angular/core';
import { GOODS,Good } from '../goods';
import { Router } from '@angular/router';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {

  goods_list = GOODS;
  goods_order:Good[]=[];

  constructor(
    public router: Router,
    public GoodsService: GoodsService
  ) {}

  ngOnInit() {
  }

  // 添加商品
  addIntoOrder(selected_goods:Good) {
    const checkIfExisted = this.GoodsService.goods.filter((item: Good) => {
      return item.id === selected_goods.id;
    });
    if (checkIfExisted.length === 0) {
      selected_goods.num ++;
     this.GoodsService.goods.push(selected_goods);
    } else {
      this.GoodsService.goods.forEach((item:Good) => {
        if (item.id === selected_goods.id) {
          item.num ++ ;
        }
      });
    }
  }

  // 跳转至购物车页面
  goToOrder() {
    this.router.navigate(['/order']);
  }
}
