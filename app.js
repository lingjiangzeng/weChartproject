//app.js
App({
	onLaunch: function() {
		wx.setTabBarBadge({
			index: 0,
			text: '1'
		})
		// 展示本地存储能力
		/* 以下写法是微信缓存 */
		let logs = wx.getStorageSync('logs') || [];
		wx.setStorageSync('logs', logs);
		// 登录
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			}
		})
		this.getUserInfo();
		this.showCarnumber();
	},
	/* 获取用户基本信息 */
	getUserInfo: function() {
		return new Promise((resolve, reject) => {
			// 获取用户信息
			wx.getSetting({
				success: res => {
					if (res.authSetting['scope.userInfo']) {
						// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
						wx.getUserInfo({
							success: res => {
								// 可以将 res 发送给后台解码出 unionId
								resolve(res.userInfo);
								this.globalData.userInfo = res.userInfo;
								// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
								// 所以此处加入 callback 以防止这种情况
								if (this.userInfoReadyCallback) {
									this.userInfoReadyCallback(res)
								}
							}
						})
					}
				}
			})
		})
	},
	/* 设置中意显示商品品种数量 */
	showCarnumber: function() {
		if (this.globalData.Carnumber.length > 0) {
			let Carnumber = this.globalData.Carnumber.length.toString();
			wx.setTabBarBadge({
					index: 1,
					text: Carnumber,
				},

			)
		} else {
			wx.removeTabBarBadge({
				index: 1,
			})
		}
	},
	/* 购物车减去商品/商品数量 */
	minuCarnumber: function(obj) {
		let judegkey = true;
		let _that = this;
		if (this.globalData.Carnumber.length > 0) {
			try {
				this.globalData.Carnumber.forEach(function(value, index) {
					if (value.id == obj.id) {
						if (_that.globalData.Carnumber[index].count > 1) {
							let count = _that.globalData.Carnumber[index].count - 1;
							_that.globalData.Carnumber[index].count = count;
						} else {
							_that.globalData.Carnumber.splice(index, 1);
						}
						judegkey = false;
						throw new Error('end');
					}

				});
			} catch (e) {
				if (e.message != 'end') {
					console.log('代码报错!')
				}
			};
			this.showCarnumber();
		}

	},
	/* 购物车添加商品/商品数量 */
	addCarnumber: function(obj) {
		let judegkey = true;
		let _that = this;
		try {
			this.globalData.Carnumber.forEach(function(value, index) {
				if (value.id == obj.id) {
					judegkey = false;
					let count = _that.globalData.Carnumber[index].count + 1;
					_that.globalData.Carnumber[index].count = count;
					throw new Error('end');
				}

			});
		} catch (e) {
			if (e.message != 'end') {
				console.log('代码报错!')
			}
		};
		if (judegkey) {
			obj.count = 1;
			this.globalData.Carnumber.push(obj);
		}
		this.showCarnumber();
	},
	/* 页面监听 全局变量方法 */
	watchglobalData: function(method) {
		let  _that = this;
		let obj = _that.globalData;
		Object.defineProperty(obj,'count', {
			configurable: true,
			enumerable: true,
			set: function() {
				method(_that.globalData._count)
			},
			get: function() {
			}
		})
	},

	globalData: {
		userInfo: {},
		Carnumber: [],
		_count:1,
		userchartList:[
			{
				userId:'zlg_1',
				userHeardImg:'../../allpicture/myactive.png',
				name:'zlg',
				msg:'你在干嘛sdfsfsdfsdfsdfsfsdfsdf',
				time:'2020-4-25 15:30',
				msgcount:11,
				chartcontent:[
					{
						sendermsg:'sender',
						msgType:1,/* 1 文本(表情) 2.图片  */
						msgContent:'你好，在吗？式咖啡机爱看安科技示范哈克金卡技术打法空间时间的话飞机喀什哈克世界的繁华看军事科技孵化',
						msgId:'zlgmsg_1',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
					{
						sendermsg:'receiver',
						msgType:1,/* 1 文本(表情) 2.图片  */
						msgContent:'你好，在吗？',
						msgId:'zlgmsg_1',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
					{
						sendermsg:'sender',
						msgType:2,/* 1 文本(表情) 2.图片  */
						msgContent:'../../allpicture/baicai.jpg',
						msgId:'zlgmsg_1',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
					{
						sendermsg:'receiver',
						msgType:2,/* 1 文本(表情) 2.图片  */
						msgContent:'../../allpicture/baicai.jpg',
						msgId:'zlgmsg_1',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
					{
						sendermsg:'sender',
						msgType:2,/* 1 文本(表情) 2.图片  */
						msgContent:'../../allpicture/baicai.jpg',
						msgId:'zlgmsg_1',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
					{
						sendermsg:'receiver',
						msgType:1,/* 1 文本(表情) 2.图片  */
						msgContent:'你好，在吗？',
						msgId:'zlgmsg_2',
						msgTime:'2015-12-10 15:30',
						senderImg:'../../allpicture/myactive.png',
					},
				]
			},	
		]
	}
})
