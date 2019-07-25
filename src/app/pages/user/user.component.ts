import { Component, OnInit } from '@angular/core';
// 引入服务
import { UserService } from '../../services/user/user.service';
// 引入模块获取动态路由
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public data:Object = {};
  constructor(private userService:UserService, private router:ActivatedRoute) { }

  ngOnInit() {
    var that = this;
    // 获取路由传值的nickname参数
    that.router.params.subscribe(function(data) {
      // 获取用户详情
      that.userService.getUser(that, data.aid)
    })

  }

}
