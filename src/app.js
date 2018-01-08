//app.js
App({
  onLaunch: function () {
      var that = this;
      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      wx.login({
              success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              console.log("登陆后获取到的登录信息");
      console.log(res)
      //获取用户标识
      wx.request({
        url: "https://wx.ccfancy.com/api/wxlogin/getopenid",
          data: {
              code: res.code,
          },
          method: 'POST',
          success: function (res1) {
              console.log('检查用户：seccuss1');
              console.log(res1);
              if (res1.data.state == "1") {
                  wx.setStorageSync('oid', res1.data.info);
                  that.globalData.openid = res1.data.info;
              } else {
                  //检查失败后处理
              }
              console.log(that.globalData.openid);
          },
          fail: function () {
              // fail
              console.log("fail1")
          },
          complete: function () {
              // complete
              console.log("complete1")
          }
      })
  }
})

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
        user_info: null,
        openid: "",
  },
  getHost: function () {
    return "https://wx.ccfancy.com";
  },
})
