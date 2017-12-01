// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newListItems:[{
      dateTime: '2017-10-11', content: '我的优惠券', id: 1
    }, {
      dateTime: '2017-10-11', content: '我的优惠券', id: 2
      }, {
        dateTime: '2017-10-11', content: '我的优惠券', id: 3
    }, {
      dateTime: '2017-10-11', content: '我的优惠券', id: 4
      }, {
        dateTime: '2017-10-11', content: '我的优惠券', id:5
      }]
  },
  //点击跳转页面
  goDetail: function (e) {
    var id = e.currentTarget.id;
    console.log(e.currentTarget.tagName)

    //wx.switchTab跳转tabbar页面，navigateTo跳转非tabbar页面
    wx.navigateTo({
      url: '../newsDetail/index?id=' + id,
    })
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