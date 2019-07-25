import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeDetailService {

  constructor(private http:Http) { }

  // 去后台请求帖子详情
  getThemeDetail(that, id) {
    var url = 'https://cnodejs.org/api/v1/topic/' + id;
    this.http.get(url).subscribe(function (res) {
      // 请求成功回调函数
      that.dataObj = JSON.parse(res['_body']).data;
    }, function (err) {
      // 请求失败回调函数
      console.log(err);
    })
  }
}
