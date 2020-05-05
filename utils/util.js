const mymodule = {
	routers: function(url) {
		console.log(url);
		wx.navigateTo({
			url: url,
			events: {},
			fail: function(res) {
			},
			success: function(res) {
			}
		})
	},
	getTime:function(type){
		/* YYYY-MMMM-DDDD 2020-12-30  
		YYYY-MMMM-DDDD hh:mm:ss 2020-12-30 15:30:22 
		YYYY年MMMM月DDDD日 2020年12月30日
		YYYY年MMMM月DDDD日hh时mm分ss秒 2020年12月30日 15时30分22秒
		 type=admin 等于用户名返回时间Id
		*/
		let  Data = new Date()
		let   year =  Data.getFullYear();
		let  month =  (Data.getMonth() + 1)<10  ? '0'+(Data.getMonth() + 1) :Data.getMonth();
		let  day = Data.getDate()<10  ? '0'+Data.getDate():Data.getDate();
		let hours = Data.getHours()<10  ? '0'+Data.getHours():Data.getHours();
		let minutes = Data.getMinutes()<10  ? '0'+Data.getMinutes() :Data.getMinutes();
		let  seconds = Data.getSeconds() <10  ? '0'+Data.getSeconds() :Data.getSeconds();
		let  Milliseconds = Data.getMilliseconds();
		if(type == 'YYYY-MMMM-DDDD'){
				return year+'-'+month+'-'+day;
		}else if(type == 'YYYY-MMMM-DDDD hh:mm:ss'){
			return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
			
		}else if(type == 'YYYY年MMMM月DDDD日'){
			return year+'年'+month+'月'+day+'日';
		}else if(type == 'YYYY年MMMM月DDDD日hh时mm分ss秒'){
			return year+'年'+month+'月'+day+'日'+hours+'时'+minutes+'分'+seconds+'秒';
		}else{
			return type+year+month+day+minutes+hours+seconds+Milliseconds;
		}
		
	}
};
module.exports = mymodule;
