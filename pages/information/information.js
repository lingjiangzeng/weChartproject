//index.js
//获取应用实例
const app = getApp()
const mymodule = require('../../utils/util.js');
Page({
  data: {
    motto:1,
	userList:[],
  },
  onShow:function(){
	  this.setData({
		  userList: JSON.parse(JSON.stringify(app.globalData.userchartList)),
	  })
	  app.watchglobalData(this.getback);
  },
  getback:function(msg){
	  this.setData({
		  motto:msg,
	  })
  },
 ToChartPage: function() {
  	mymodule.routers('../chartpage/chartpage');
  },
})
