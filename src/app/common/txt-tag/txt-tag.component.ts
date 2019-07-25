import { Component, OnInit, Input } from '@angular/core';

const tag = {
	top: {
		color: "magenta",
		txt: "置顶"
	},
	good: {
		color: "geekblue",
		txt: "精华"
	},
	job: {
		color: "cyan",
		txt: "招聘"
	},
	share: {
		color: "purple",
		txt: "分享"
	},
	ask: {
		color: "green",
		txt: "问答"
	},
	dev: {
		color: "lime",
		txt: "测试"
	}
};


@Component({
  selector: 'app-txt-tag',
  templateUrl: './txt-tag.component.html',
  styleUrls: ['./txt-tag.component.css']
})
export class TxtTagComponent implements OnInit {
  public nowTag;
  // 子组件@input接收父组件传过来的数据
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.nowTag = this.getTag(this.data);
  }

  getTag(data) {
    return (
      data.top?tag.top:
      data.good?tag.good:tag[data.tab]
    );
  }

}
