// pages/user_coupon/index.js
const app = getApp();
var base_url = app.getHost();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: '1',
    show: '1',
    coupons: [{add_time:"2017-11-30 21:18:26",coupon_id:"5",coupon_name:"1",coupon_num:"20",datemax:"2017-12-09 23:59:59",id:"5",order_id:null,status:"1",use_min_num:"80",user_id:"12"}],
    coupons_use: [{add_time:"2017-11-30 21:18:26",coupon_id:"2",coupon_name:"1",coupon_num:"20",datemax:"2017-12-09 23:59:59",id:"5",order_id:null,status:"2",use_min_num:"80",user_id:"12"}],
    coupons_old: [{add_time:"2017-11-30 21:18:26",coupon_id:"5",coupon_name:"1",coupon_num:"20",datemax:"2017-12-09 23:59:59",id:"5",order_id:null,status:"1",use_min_num:"80",user_id:"12"}],
    second_height: 0
  },

  //菜单点击跳转
  jump: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      tab: id,
      show: id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.getHost() + "/api/wxapi/index", //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res)
      }
    })

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
    var that = this;
    that.onLoad();
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