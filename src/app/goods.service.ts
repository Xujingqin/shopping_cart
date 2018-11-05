import { Injectable,OnInit,EventEmitter} from '@angular/core';
import { Observable, of } from 'rxjs';

import {Good } from './goods'

@Injectable({
  providedIn: 'root'
})
export class GoodsService implements OnInit{
  public eventEmit: any;
  public goosList:any;
  goods:Good[]=[];

  constructor() { 
    this.eventEmit = new EventEmitter();
  }
  
  ngOnInit() {
  }
}
