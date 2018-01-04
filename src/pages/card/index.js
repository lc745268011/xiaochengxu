// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    card:[{
      id: 1, slideStatus: true, title: '关注有礼', con:'凡关注"开心俱乐会"微信公众号并成为会员即可获赠"关注有礼礼品"一份（礼品见店面告示！）'
    }, {
        id: 2, slideStatus: false, title: '会员消费折扣', con: '不定期发送特别优惠券，凡微信会员均可享受。'
    }]
  },
  //点击滑动展开收起
  slideBox:function(e){
    var a=e.currentTarget.id,
      slideStatus = e.currentTarget.dataset.slideStatus
    
    if (this.data.card[a - 1].slideStatus ==false){
      console.log(111)
      
      this.data.card[a - 1].slideStatus = true
      this.setData({
        card: this.data.card
      })
      
    }else{
      this.data.card[a - 1].slideStatus = false
      this.setData({
        card: this.data.card
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})