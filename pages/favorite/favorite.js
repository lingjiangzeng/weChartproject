//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodData:[],
	ifchoiceicon:false,
	
  },
  
    onShow: function() {
		this.setData({
			goodData:  JSON.parse(JSON.stringify(app.globalData.Carnumber)),
		})
    },
	choiceboxfun:function(){
		this.setData({
			ifchoiceicon:this.data.ifchoiceicon ? false : true,
		})
		this.data.goodData.forEach((value,index)=>{
			let setconut = 'goodData[' + index + '].choiced';
			this.setData({
				[setconut]:this.data.ifchoiceicon,
			})
		})
	},
	/* 添加商品 */
		addGood:function(e){
			let _that = this;
			let id = e.currentTarget.dataset.id;
			try{
				this.data.goodData.forEach((value,index)=>{
				if (value.id == id) {
					let setconut = 'goodData[' + index + '].count';
					let  sum  =  _that.data.goodData[index].count + 1;
					this.setData({
						[setconut]:sum,
					})
					app.addCarnumber({id:id});
					throw new Error('end')
				}
			})
			}catch(e){
				if(e.message  != 'end'){
					console.log('代码报错!');
				}
				
			}
			
		},
		/* 减去商品 */
		minusGood:function(e){
		let _that = this;
		let id = e.currentTarget.dataset.id;
		
		try{
			this.data.goodData.forEach((value,index)=>{
			if (value.id == id) {
				let setconut = 'goodData[' + index + '].count';
				let  sum  =  _that.data.goodData[index].count - 1;
				if(sum <= 0){
					let  newarray=[];
					this.data.goodData.forEach((value,index)=>{
						if(value.id != id){
							newarray.push(value)
						}
					})
					this.setData({
						goodData:newarray,
					})
				}else{
					this.setData({
						[setconut]:sum,
					})
				}
				
				app.minuCarnumber({id:id});
				throw new Error('end')
			}
		})
		}catch(e){
			if(e.message  != 'end'){
				console.log('代码报错!');
			}
			
		}
		}
})
