//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/img/stars-1.png',
    selectedSrc: '/img/stars-2.png',
    halfSrc: '/img/half.png',
    key: 0,//评分,
    array: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
  },
  onLoad: function () {
  },
  //点击右边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击左边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
  bindPickerChange: function (e) {
    var that = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var a = that.data.array[e.detail.value];
    that.setData({
      index: e.detail.value,
      jishi_name: a
    })
    console.log(that.data.jishi_name)
  },
})