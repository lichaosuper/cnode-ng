import { Component, OnInit } from '@angular/core';
// 引入服务
import { ThemeDetailService } from '../../services/theme-detail/theme-detail.service';
// 引入模块获取动态路由
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.css']
})
export class ThemeDetailComponent implements OnInit {
  public dataObj:Object = {};
  constructor(private themeDetailService: ThemeDetailService, private router: ActivatedRoute) { }

  ngOnInit() {
    var that = this;
    // 获取路由传值的nickname参数
    that.router.params.subscribe(function(data) {
      // 获取用户详情
      that.themeDetailService.getThemeDetail(that, data.aid)
    })

  }

}
