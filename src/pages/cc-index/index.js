// pages/cc-index/index.js
const app = getApp();
var base_url = app.getHost();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatorActiveColor: '#23ade5',
    indicatorColor: '#fff',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navItems: [],
    yhItems: [{
      img: '/img/bjt.png', name: '足疗体验月卡1', yPrice: '298.00', xPrice: '198.00', id: 1, num: 1
    }, {
      img: '/img/bjt.png', name: '足疗体验月卡2', yPrice: '298.00', xPrice: '198.00', id: 2, num: 2
    }, {
      img: '/img/bjt.png', name: '足疗体验月卡3', yPrice: '298.00', xPrice: '198.00', id: 3, num: 3
    }, {
      img: '/img/bjt.png', name: '足疗体验月卡4', yPrice: '298.00', xPrice: '198.00', id: 4, num: 4
    }
    ],
    shopName: 'ccfancy',
    shopTime: '08:00-22:00',
    address: '胶州市福州南路宝龙中心A座2208'
  },
  //点击拨打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //点击跳转页面
  goDetail: function (e) {
    var id = e.currentTarget.id;
    console.log(e.currentTarget.tagName)

    //wx.switchTab跳转tabbar页面，navigateTo跳转非tabbar页面
    wx.navigateTo({
      url: '../cateDetail/index?id=' + id,
    })
  },
  //打开地图
  tapMap: function (e) {
    var addr = e.currentTarget.dataset.addr, name = e.currentTarget.dataset.name
    wx.openLocation({
      latitude: 23.066362, // 纬度，范围为-90~90，负数表示南纬
      longitude: 113.298175, // 经度，范围为-180~180，负数表示西经
      name: name,
      address: addr,
      scale: 16, // 缩放比例
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(this.data.canIUse)
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
    wx.request({
      url: app.getHost() + "/api/wxapi/index", //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.info.navItems)
        that.setData({
          navItems: res.data.info.navItems
         
        })
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