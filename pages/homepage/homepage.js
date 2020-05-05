const app = getApp()
/* 引入公共方法 */
const mymodule = require('../../utils/util.js');
Page({
	/* 页面初始的数据 */
	data: {
		classifyforfood: [{
				lable: '新鲜蔬菜',
				id: 'a1',
				active: true,
				meunfood: [{
						lable: '叶菜类',
						id: 'b1',
						active: true,
					},
					{
						lable: '根茎类',
						id: 'b2',
						active: false,
					},
					{
						lable: '姜葱蒜',
						id: 'b3',
						active: false,
					},
					{
						lable: '茄果类',
						id: 'b4',
						active: false,
					},
					{
						lable: '豆类',
						id: 'b5',
						active: false,
					},
					{
						lable: '菌类',
						id: 'b6',
						active: false,
					},
					{
						lable: '特菜',
						id: 'b7',
						active: false,
					},
					{
						lable: '加工蔬菜',
						id: 'b8',
						active: false,
					}

				]
			},
			{
				lable: '时令水果',
				id: 'a2',
				active: false,
				meunfood: [{
						lable: '苹果',
						id: 'b1',
						active: true,
					},
					{
						lable: '柑橘橙柚',
						id: 'b2',
						active: false,
					},
					{
						lable: '梨',
						id: 'b3',
						active: false,
					},
					{
						lable: '瓜类',
						id: 'b4',
						active: false,
					},
					{
						lable: '芒果',
						id: 'b5',
						active: false,
					},
					{
						lable: '香蕉',
						id: 'b6',
						active: false,
					},
					{
						lable: '菠萝',
						id: 'b7',
						active: false,
					},
					{
						lable: '火龙果',
						id: 'b8',
						active: false,
					},
					{
						lable: '其他',
						id: 'b9',
						active: false,
					}

				]
			},
			{
				lable: '肉禽类品',
				id: 'a3',
				active: false,
				meunfood: [{
						lable: '品牌猪肉',
						id: 'b1',
						active: true,
					},
					{
						lable: '品牌牛羊肉',
						id: 'b2',
						active: false,
					},
					{
						lable: '冻猪产品',
						id: 'b3',
						active: false,
					},
					{
						lable: '猪分割肉',
						id: 'b4',
						active: false,
					},
					{
						lable: '猪五花肉',
						id: 'b5',
						active: false,
					},
					{
						lable: '猪骨头类',
						id: 'b6',
						active: false,
					},
					{
						lable: '猪副产品',
						id: 'b7',
						active: false,
					},
					{
						lable: '肉馅/丝/片',
						id: 'b8',
						active: false,
					},
					{
						lable: '猪蹄子',
						id: 'b9',
						active: false,
					},
					{
						lable: '整鸡',
						id: 'b10',
						active: false,
					},
					{
						lable: '分割鸡产品',
						id: 'b11',
						active: false,
					},
					{
						lable: '鸡副产品',
						id: 'b12',
						active: false,
					},
					{
						lable: '鸡腿',
						id: 'b13',
						active: false,
					},
					{
						lable: '鸡胸',
						id: 'b14',
						active: false,
					},
					{
						lable: '鸭肉类',
						id: 'b15',
						active: false,
					},
					{
						lable: '其他禽类',
						id: 'b16',
						active: false,
					},
					{
						lable: '鲜牛肉类',
						id: 'b17',
						active: false,
					},
					{
						lable: '冻牛肉类',
						id: 'b18',
						active: false,
					},
					{
						lable: '羊肉类',
						id: 'b19',
						active: false,
					},
					{
						lable: '调理类',
						id: 'b21',
						active: false,
					},
					{
						lable: '腌腊类',
						id: 'b22',
						active: false,
					}

				]
			},
			{
				lable: '方便速食',
				id: 'a4',
				active: false,
				meunfood: [{
						lable: '熟食类',
						id: 'b1',
						active: true,
					},
					{
						lable: '香肠火腿',
						id: 'b2',
						active: false,
					},
					{
						lable: '禽类料包',
						id: 'b3',
						active: false,
					},
					{
						lable: '肉类料包',
						id: 'b4',
						active: false,
					},
					{
						lable: '其他料包',
						id: 'b5',
						active: false,
					},
					{
						lable: '鲜面制品',
						id: 'b6',
						active: false,
					},
					{
						lable: '包子馒头',
						id: 'b7',
						active: false,
					},
					{
						lable: '粉面水饺',
						id: 'b8',
						active: false,
					},
					{
						lable: '油条饼类',
						id: 'b9',
						active: false,
					},
					{
						lable: '米糕制品',
						id: 'b10',
						active: false,
					},
					{
						lable: '其它面点',
						id: 'b11',
						active: false,
					},
					{
						lable: '其它',
						id: 'b12',
						active: false,
					},
					{
						lable: '酒店菜',
						id: 'b13',
						active: false,
					},
					{
						lable: '汤粥类',
						id: 'b14',
						active: false,
					},

				]
			},
			{
				lable: '加工调理',
				id: 'a5',
				active: false,
				meunfood: [{
						lable: '调理类',
						id: 'b1',
						active: true,
					},
					{
						lable: '烧烤类',
						id: 'b2',
						active: false,
					},
					{
						lable: '鱼糜火锅料',
						id: 'b3',
						active: false,
					},
					{
						lable: '肉糜火锅料',
						id: 'b4',
						active: false,
					},
					{
						lable: '火锅辅料',
						id: 'b5',
						active: false,
					},
					{
						lable: '西快小吃',
						id: 'b6',
						active: false,
					},
					{
						lable: '速冻蔬菜',
						id: 'b7',
						active: false,
					},
					{
						lable: '西式料理',
						id: 'b8',
						active: false,
					},
					{
						lable: '烘培原料',
						id: 'b9',
						active: false,
					},

				]
			},
			{
				lable: '海鲜水产',
				id: 'a6',
				active: false,
				meunfood: [{
						lable: '鲜活/冰鲜',
						id: 'b1',
						active: true,
					},
					{
						lable: '虾/虾制品',
						id: 'b2',
						active: false,
					},
					{
						lable: '冷冻鱼/蛙类',
						id: 'b3',
						active: false,
					},
					{
						lable: '海带/海蜇',
						id: 'b4',
						active: false,
					},
					{
						lable: '贝壳蟹类',
						id: 'b5',
						active: false,
					},
					{
						lable: '水产干货',
						id: 'b6',
						active: false,
					},
					{
						lable: '鱿鱼/海参',
						id: 'b7',
						active: false,
					},
					{
						lable: '韩餐日料',
						id: 'b8',
						active: false,
					},

				]
			},
			{
				lable: '蛋品豆面',
				id: 'a7',
				active: false,
				meunfood: [{
						lable: '鲜蛋',
						id: 'b1',
						active: true,
					},
					{
						lable: '加工蛋',
						id: 'b2',
						active: false,
					},
					{
						lable: '豆制品',
						id: 'b3',
						active: false,
					},
					{
						lable: '鲜制面条',
						id: 'b4',
						active: false,
					},
					{
						lable: '鲜制面点',
						id: 'b5',
						active: false,
					}

				]
			},
			{
				lable: '米面粮油',
				id: 'a8',
				active: false,
				meunfood: [{
						lable: '大米',
						id: 'b1',
						active: true,
					},
					{
						lable: '面粉',
						id: 'b2',
						active: false,
					},
					{
						lable: '食用油',
						id: 'b3',
						active: false,
					},
					{
						lable: '杂粮',
						id: 'b4',
						active: false,
					},
					{
						lable: '烘培佐料',
						id: 'b5',
						active: false,
					},

				]
			},
			{
				lable: '休闲酒饮',
				id: 'a9',
				active: false,
				meunfood: [{
						lable: '牛奶乳品',
						id: 'b1',
						active: true,
					},
					{
						lable: '碳酸饮料',
						id: 'b2',
						active: false,
					},
					{
						lable: '茶饮料',
						id: 'b3',
						active: false,
					},
					{
						lable: '果汁',
						id: 'b4',
						active: false,
					},
					{
						lable: '饮用水',
						id: 'b5',
						active: false,
					},
					{
						lable: '功能饮料',
						id: 'b6',
						active: false,
					},
					{
						lable: '啤酒',
						id: 'b7',
						active: false,
					},
					{
						lable: '白酒',
						id: 'b8',
						active: false,
					},
					{
						lable: '果酒',
						id: 'b9',
						active: false,
					},
					{
						lable: '其它酒品',
						id: 'b10',
						active: false,
					},
					{
						lable: '冲调饮品',
						id: 'b11',
						active: false,
					},
					{
						lable: '休闲食品',
						id: 'b12',
						active: false,
					},
					{
						lable: '方便面',
						id: 'b13',
						active: false,
					},
					{
						lable: '火腿肠',
						id: 'b14',
						active: false,
					},
					{
						lable: '干果蜜饯',
						id: 'b15',
						active: false,
					},
					{
						lable: '迎客茶',
						id: 'b16',
						active: false,
					},
					{
						lable: '迎客零食',
						id: 'b17',
						active: false,
					}

				]
			},
			{
				lable: '调料干货',
				id: 'a10',
				active: false,
				meunfood: [{
						lable: '自有品牌',
						id: 'b1',
						active: true,
					},
					{
						lable: '调味品',
						id: 'b2',
						active: false,
					},
					{
						lable: '调味酱',
						id: 'b3',
						active: false,
					},
					{
						lable: '调味醋',
						id: 'b4',
						active: false,
					},
					{
						lable: '干货',
						id: 'b5',
						active: false,
					},
					{
						lable: '粉丝粉条',
						id: 'b6',
						active: false,
					},
					{
						lable: '腌菜罐头',
						id: 'b7',
						active: false,
					},
					{
						lable: '西餐专区',
						id: 'b8',
						active: false,
					},

				]
			},
			{
				lable: '餐厨用品',
				id: 'a11',
				active: false,
				meunfood: [{
						lable: '一次性用品',
						id: 'b1',
						active: true,
					},
					{
						lable: '纸品湿巾',
						id: 'b2',
						active: false,
					},
					{
						lable: '清洁消毒',
						id: 'b3',
						active: false,
					},
					{
						lable: '厨房用具',
						id: 'b4',
						active: false,
					},
					{
						lable: '圆形餐盒',
						id: 'b5',
						active: false,
					},
					{
						lable: '方形餐盒',
						id: 'b6',
						active: false,
					},
					{
						lable: '多格餐盒',
						id: 'b7',
						active: false,
					},
					{
						lable: '纸碗纸盒',
						id: 'b8',
						active: false,
					},
					{
						lable: '酱料杯',
						id: 'b9',
						active: false,
					},
					{
						lable: '筷子餐具包',
						id: 'b10',
						active: false,
					},
					{
						lable: '竹制品',
						id: 'b11',
						active: false,
					},
					{
						lable: '刀叉勺',
						id: 'b12',
						active: false,
					},
					{
						lable: '被子吸管',
						id: 'b13',
						active: false,
					},
					{
						lable: '塑料袋',
						id: 'b14',
						active: false,
					},
					{
						lable: '锡纸保险膜',
						id: 'b15',
						active: false,
					},
					{
						lable: '清洁工具',
						id: 'b16',
						active: false,
					},
					{
						lable: '厨房设备',
						id: 'b17',
						active: false,
					},
					{
						lable: '家电五金',
						id: 'b18',
						active: false,
					},
					{
						lable: '软百服饰',
						id: 'b19',
						active: false,
					},

				]
			},
			{
				lable: '方便菜品',
				id: 'a12',
				active: false,
				meunfood: [{
						lable: '肉类料包',
						id: 'b1',
						active: true,
					},
					{
						lable: '预制菜',
						id: 'b2',
						active: false,
					},
					{
						lable: '速冻蔬菜',
						id: 'b3',
						active: false,
					},
				]
			},

		],
		scrollintoview: 'a1',
		meunfood: [{
				lable: '叶菜类',
				id: 'b1',
				active: true,
			},
			{
				lable: '根茎类',
				id: 'b2',
				active: false,
			},
			{
				lable: '姜葱蒜',
				id: 'b3',
				active: false,
			},
			{
				lable: '茄果类',
				id: 'b4',
				active: false,
			},
			{
				lable: '豆类',
				id: 'b5',
				active: false,
			},
			{
				lable: '菌类',
				id: 'b6',
				active: false,
			},
			{
				lable: '特菜',
				id: 'b7',
				active: false,
			},
			{
				lable: '加工蔬菜',
				id: 'b8',
				active: false,
			}
		],
		foodlistdata: [{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_1',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_2',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_3',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_4',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_5',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_6',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_7',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_8',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_9',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_10',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},
			{
				imgurl: '../../allpicture/baicai.jpg',
				foodname: '大白菜',
				foodprice: '1.5~1.0',
				id: 'baicai_11',
				showspecification: false,
				specification: [{
						count: 0,
						weight: 1,
						foodprice: 1.5
					},
					{
						count: 0,
						weight: 2,
						foodprice: 1.4,
					},
					{
						count: 0,
						weight: 5,
						foodprice: 1.2,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.1,
					},
					{
						count: 0,
						weight: 8,
						foodprice: 1.0,
					},
					{
						count: 0,
						weight: 10,
						foodprice: 1.0,
					}

				]
			},

		],

		classifyforfoodindex: 0,
		classifyforfoodid: 'a1',
		meunfoodindex: 0,
		meunfoodid: 'b1',
		classifyforfoodstyle: '',
		showlayer: false,
	},
	onLoad: function() {
		this.setData({
			classifyforfoodstyle: 'width:' + this.data.classifyforfood.length * 150 + 'rpx',
		})
	},
	onshow: function() {
		
	},
	/* 顶部菜单选中 */
	tabfun: function(e) {
		let index = e.currentTarget.dataset.index;
		if (index == this.data.classifyforfoodindex) {
			return
		};
		let id = e.currentTarget.dataset.id;
		let newvalue = 'classifyforfood[' + index + '].active';
		let oldvalue = 'classifyforfood[' + this.data.classifyforfoodindex + '].active';
		this.setData({
			[newvalue]: true,
			[oldvalue]: false,
			classifyforfoodindex: index,
			classifyforfoodid: id,
			scrollintoview: id,
			meunfood: JSON.parse(JSON.stringify(this.data.classifyforfood[index].meunfood)),
			meunfoodindex: 0,
			meunfoodid: this.data.classifyforfood[index].meunfood[0].id,
			showlayer: false,
		})
		let name = this.data.classifyforfood[index].meunfood[0].lable;
		this.data.foodlistdata.forEach((value, index) => {
			let setvalue = 'foodlistdata[' + index + '].foodname';
			this.setData({
				[setvalue]: name,
			})
		})
	},
	/* 左边菜单选中 */
	lefttabfun: function(e) {
		let index = e.currentTarget.dataset.index;
		if (index == this.data.meunfoodindex) {
			return
		};
		let name = e.currentTarget.dataset.name;
		let id = e.currentTarget.dataset.id;
		let newvalue = 'meunfood[' + index + '].active';
		let oldvalue = 'meunfood[' + this.data.meunfoodindex + '].active';
		this.setData({
			[newvalue]: true,
			[oldvalue]: false,
			meunfoodindex: index,
			meunfoodid: id,
		})
		this.data.foodlistdata.forEach((value, index) => {
			let setvalue = 'foodlistdata[' + index + '].foodname';
			this.setData({
				[setvalue]: name,
			})
		})
	},
	/*展开菜单选择 */
	showlayerfun: function() {
		this.setData({
			showlayer: this.data.showlayer ? false : true,
		})
	},
	/* 用于阻止冒泡事件 */
	fun: function() {
		/* 冒泡事件 */
	},
	/* 打开规格 */
	sizebtnfun: function(e) {
		let index = e.currentTarget.dataset.index;
		let activeindex = 'foodlistdata[' + index + '].showspecification';
		this.setData({
			[activeindex]: this.data.foodlistdata[index].showspecification ? false : true,
		})

	},
	/* 跳转搜索跳转 */
	tosearch: function() {
		mymodule.routers('../searchpage/searchpage');
	},
	/* 添加商品 */
	addGood:function(e){

		let indexs = e.currentTarget.dataset.indexs;
		let index = e.currentTarget.dataset.index;
		let setconut = 'foodlistdata[' + indexs + '].specification['+index+'].count';
		let oldNumber  = this.data.foodlistdata[indexs].specification[index].count;
		oldNumber++;
		this.setData({
			[setconut]: oldNumber >= 99 ? 99 : oldNumber,
		})
		app.addCarnumber(this.data.foodlistdata[indexs]);
	},
	/* 减去商品 */
	minusGood:function(e){
		let indexs = e.currentTarget.dataset.indexs;
		let index = e.currentTarget.dataset.index;
		let setconut = 'foodlistdata[' + indexs + '].specification['+index+'].count';
		let oldNumber  = this.data.foodlistdata[indexs].specification[index].count;
		oldNumber--;
		this.setData({
			[setconut]:oldNumber <= 0 ? 0 : oldNumber,
		})
		app.minuCarnumber(this.data.foodlistdata[indexs]);
	}
})
