//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '中意',
	seachvalue:'',
	searchaffirm:false,
	searchbtn:true,
	recommendData:[
		{
			label:'清洁用品',
		},
		{
			label:'胡萝卜',
		},
		{
			label:'菠萝蜜',
		},
		{
			label:'萃选',
		},
		{
			label:'苦瓜',
		},
		{
			label:'尖椒',
		},
		{
			label:'5斤面粉',
		},
		{
			label:'糯米鸡',
		},
		{
			label:'娃娃菜',
		},
	],
	foodlistdata:[
		{
		imgurl:'../../allpicture/baicai.jpg',
		foodname:'大白菜',
		foodprice:'1.5~1.0',
		id:'baicai_1',
		},
	],
  },
  onShow:function(){
	  console.log('显示');
  },
  onReady:function(){
	  console.log('准备');
  },
  seachvaluefun:function(e){
	  this.setData({
		  seachvalue:e.detail.value,
		  searchbtn:true,
	  })
  },
  clearseachvaluefun:function(){
	  this.setData({
	  	seachvalue:'',
		searchbtn:true,
	  })
  },
  searchaffirmfun:function(){
	  if(this.data.seachvalue == ''){
		  wx.showToast({
		    title: '请输入搜索内容',
		    icon: 'none',
		    duration:1000
		  });
		  return;
	  }
	  let  value = 'foodlistdata[0].foodname';
	  this.setData({
	  	searchaffirm:true,
		[value]:this.data.seachvalue,
		searchbtn:false,
	  })
  },
  searchcolsefun:function(){
  	  this.setData({
  	  	seachvalue:'',
		searchaffirm:false,
		searchbtn:true,
  	  })
  },
  searchlabelfun:function(e){
	 let  value = 'foodlistdata[0].foodname';
	  this.setData({
		seachvalue:e.currentTarget.dataset.label,
		searchaffirm: true,
		[value]:e.currentTarget.dataset.label,
		searchbtn:false,
	  })
  }
})
