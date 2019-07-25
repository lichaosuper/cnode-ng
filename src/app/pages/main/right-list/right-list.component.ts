import { Component, OnInit } from '@angular/core';
// 引入服务
import { MainService } from '../../../services/main/main.service';

// 引入模块获取动态路由
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

// 尝试该组件不引入能否使用
// import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-right-list',
  templateUrl: './right-list.component.html',
  styleUrls: ['./right-list.component.css']
})
export class RightListComponent implements OnInit {
  private _tab:string;
  public list;
  public currentPage:number = 1;
  constructor(private mainService: MainService, private router:ActivatedRoute) { }

  ngOnInit() {
    var that = this;
    // 获取路由传值的id参数
    this.router.params.subscribe(function(data) {
      // 如果新的分类和原来的分类不同，就把currentPage重新设为1，从第一页开始加载新分类的数据
      if(that._tab !== data.aid) {
        that.currentPage = 1;
      }
      // 去后台获取数据
      that.mainService.getList(that, data.aid, that.currentPage);
      that._tab = data.aid;
    })
  } 

  // 页码改变的操作函数
  pageChange(newPage) {
    console.log(newPage);
    this.currentPage = newPage;
    // 重新获取分页后的数据
    this.mainService.getList(this, this._tab, newPage);
  }

}
