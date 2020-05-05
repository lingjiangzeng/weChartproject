//index.js
//获取应用实例
const app = getApp();
const mymodule = require('../../utils/util.js');

Page({
	data: {
		usermsg: {},
		inputmsg: '',
		chartWindowStyle: 'height:calc(100% - 110rpx);',
		scrollIntoView: '',
		pictrueObj:{
			 count:'',
			 picture:[],
		},
	},
	onShow: function() {
		this.setData({
			usermsg: JSON.parse(JSON.stringify(app.globalData.userchartList[0])),
			scrollIntoView: 'zlgmsg_2',
		})
		wx.setNavigationBarTitle({
			title: this.data.usermsg.name,
		})
		/* 监听  pictrueObj*/
		this.watchpictrueObj();
	},
	watchpictrueObj:function(){
		let  _that = this;
		let obj = this.data.pictrueObj;
		Object.defineProperty(obj,'count', {
			configurable: true,
			enumerable: true,
			set: function() {
				_that.sendpictrue();
			},
			get: function() {
			}
		})
	},
	rowChangfun: function(e) {
		let height = 110 + (e.detail.lineCount - 1) * 30;
		this.setData({
			chartWindowStyle: 'height:calc(100% - ' + height + 'rpx);',
		})
	},
	changVlauefun: function(e) {
		this.setData({
			inputmsg: e.detail.value,
		})

	},
	sendfun: function() {
		let msgId = mymodule.getTime('admin');
		let msgTime = mymodule.getTime('YYYY-MMMM-DDDD hh:mm:ss');
		let msgObjtext = {
			sendermsg: 'receiver',
			msgType: 1,
			msgContent: this.data.inputmsg,
			msgId: msgId,
			msgTime: msgTime,
			senderImg: '../../allpicture/myactive.png',
		};
		this.data.usermsg.chartcontent.push(msgObjtext);
		this.setData({
			inputmsg: '',
			usermsg: this.data.usermsg,
			scrollIntoView: msgId,
		})
	},
	sendpictrue:function(){
		var _that =this;
		let msgObjpictrues=[];
		let lastmsgId;
		this.data.pictrueObj.picture.forEach((value,index)=>{
			let msgId = mymodule.getTime('admin');
			lastmsgId = msgId;
			let msgTime = mymodule.getTime('YYYY-MMMM-DDDD hh:mm:ss');
			let msgObjpictrue = {
				sendermsg: 'receiver',
				msgType: 2,
				msgContent:value.path,
				msgId: msgId,
				msgTime: msgTime,
				senderImg: '../../allpicture/myactive.png',
			};
			msgObjpictrues.push(msgObjpictrue);
		})
		let contents = this.data.usermsg.chartcontent;
		let usermsg ='usermsg.chartcontent';
		this.setData({
			[usermsg]:contents.concat(msgObjpictrues),
			scrollIntoView: lastmsgId,
		})
		
	},
	addPictruefun: function() {
		let _that = this;
		wx.showActionSheet({
			itemList: ['拍照', '相册'],
			success(res) {
				if (res.tapIndex == 0) {
					wx.chooseImage({
						count: 1,
						sizeType: ['original'],
						sourceType: ['camera'],
						success(res) {
							let picture = 'pictrueObj.picture';
							let count = 'pictrueObj.count';
							_that.setData({
								[picture]:res.tempFiles,
								[count]:'pictrue',
							})
						}
					})

				} else if (res.tapIndex == 1) {
					wx.chooseImage({
						count: 9,
						sizeType: ['original'],
						sourceType: ['album'],
						success(res) {
							let picture = 'pictrueObj.picture';
							let count = 'pictrueObj.count';
							_that.setData({
								[picture]:res.tempFiles,
								[count]:'pictrue',
							})
							
						}
					})
				}
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	}
})
