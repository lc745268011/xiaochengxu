// pages/mine/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    navItems: [{
      img: '/img/mine-8.png', name: '会员卡', id: 1, url: "../card/index"
    }, {
      img: '/img/mine-7.png', name: '个人信息', id: 2, url: "../user/index"
    },{
      img: '/img/mine-1.png', name: '我的优惠券', id: 3, url: "../coupon/index"
    }, {
      img: '/img/mine-2.png', name: '我的积分', id: 4, url: "../news/index"
    }, {
      img: '/img/mine-4.png', name: '我要预约', id: 5, url: "../cateDetail/index"
    }, {
      img: '/img/mine-5.png', name: '反馈建议', id: 6, url: "../evaluate/index"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that = this;


    var oid = app.globalData.openid;
    var userInfo = app.globalData.userInfo;
    //console.log(oid);
    // 更新用户信息
    wx.request({
      url: app.getHost() + "/api/wxlogin/getwxinfo",
      data: {
        oid: oid,
        userInfo: userInfo
      },
      method: 'POST',
      success: function (res) {
        console.log('检查用户：seccuss');
        //console.log(res);
        if (res.data.status == "1") {
          app.globalData.user_info = res.data.msg;
          that.setData({
            userInfo: res.data.msg
          })
        }
      },
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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