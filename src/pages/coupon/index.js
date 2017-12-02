// pages/user_coupon/index.js
const app = getApp();

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
    //var that = this;
    //var oid = app.globalData.openid;
    //
    //wx.request({
    //  url: app.getHost() + "/inter/user/showcoupons",
    //  data: {
    //    oid: oid,
    //  },
    //  success: function (res) {
    //    console.log('检查用户：seccuss');
    //    console.log(res);
    //    if (res.data.status == "ok") {
    //      that.setData({
    //        coupons: res.data.msg.coupons,
    //        coupons_use: res.data.msg.coupons_use,
    //        coupons_old: res.data.msg.coupons_old,
    //      })
    //    }
    //  },
    //})
    //wx.getSystemInfo({
    //  success: function (res) {
    //    console.log(res);
    //    // 可使用窗口宽度、高度
    //    console.log('height=' + res.windowHeight);
    //    console.log('width=' + res.windowWidth);
    //    // 计算主体部分高度,单位为px
    //    that.setData({
    //      // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
    //      second_height: res.windowHeight - res.windowWidth / 750 * 196
    //    })
    //  }
    //})


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