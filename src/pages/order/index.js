// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa: [{
      avater: '/img/touxiang.png', name: '名字', id: 1, star: 1, position: '职位', normalSrc: '/img/stars-1.png',       selectedSrc: '/img/stars-2.png',       halfSrc: '/img/half.png',       key: 1,       stars: [0, 1, 2, 3, 4], 
    }, {
      avater: '/img/touxiang.png', name: '名字', id: 2, star: 1, position: '职位', normalSrc: '/img/stars-1.png',       selectedSrc: '/img/stars-2.png',       halfSrc: '/img/half.png',       key: 2,       stars: [0, 1, 2, 3, 4], 
    }, {
      avater: '/img/touxiang.png', name: '名字', id: 3, star: 1, position: '职位', normalSrc: '/img/stars-1.png',       selectedSrc: '/img/stars-2.png',       halfSrc: '/img/half.png',       key: 3,       stars: [0, 1, 2, 3, 4], 
    }, {
      avater: '/img/touxiang.png', name: '名字', id: 4, star: 1, position: '职位', normalSrc: '/img/stars-1.png',       selectedSrc: '/img/stars-2.png',       halfSrc: '/img/half.png',       key: 4,       stars: [0, 1, 2, 3, 4], 
    }, {
      avater: '/img/touxiang.png', name: '名字', id: 5, star: 1, position: '职位', normalSrc: '/img/stars-1.png',       selectedSrc: '/img/stars-2.png',       halfSrc: '/img/half.png',       key: 5,       stars: [0, 1, 2, 3, 4], 
    }],
  },
  // //点击右边,半颗星
  // selectLeft: function (e) {
  //   var key = e.currentTarget.dataset.key;
  //   var index = e.currentTarget.id;
  //   this.data.aaa[index - 1].key = key;
  //   this.setData(
  //     {
  //       aaa: this.data.aaa
  //     });
  //   // if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
  //   //   //只有一颗星的时候,再次点击,变为0颗
  //   //   key = 0;
  //   // }



  // },
  // //点击左边,整颗星
  // selectRight: function (e) {
  //   var key = e.currentTarget.dataset.key;
  //   var index = e.currentTarget.id;
  //   this.data.aaa[index - 1].key = key;
  //   this.setData(
  //     {
  //       aaa: this.data.aaa
  //     });

  // },


  //
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