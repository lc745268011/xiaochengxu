//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cateItems: [{
      name: '产品', id: 1, child: [{ name: '美容美发1', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '新闻', id: 2, child: [{ name: '美容美发2', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '预约', id: 3, child: [{ name: '美容美发3', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 4, child: [{ name: '美容美发4', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 5, child: [{ name: '美容美发5', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 6, child: [{ name: '美容美发', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 7, child: [{ name: '美容美发', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 8, child: [{ name: '美容美发', id: 1, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 9, child: [{ name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 10, child: [{ name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 11, child: [{ name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }, {
      name: '充值', id: 12, child: [{ name: '美容美发1111', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 2, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 3, pic: '/img/product.jpg', money: '￥ 188' }, { name: '美容美发', id: 4, pic: '/img/product.jpg', money: '￥ 188' }]
    }
    ],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 点击导航选中
  active: function (e) {
    var id = e.currentTarget.id, index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  //点击跳转页面
  goDetail: function (e) {
    var id = e.currentTarget.id;
    //wx.switchTab跳转tabbar页面，navigateTo跳转非tabbar页面
    wx.navigateTo({
      url: '../cateDetail/index?id='+id,
    })
  },
  onLoad: function () {
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
