//index.js
//获取应用实例


Page({
  data: {
    motto: 'Hello World',
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
  onLoad: function () {
   
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
