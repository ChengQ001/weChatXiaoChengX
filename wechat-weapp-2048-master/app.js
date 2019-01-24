//app.js
App({
  onLaunch: function () {
     
    var that = this;
    if (this.globalData.userInfo) {

      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
    
          wx.getUserInfo({
            lang: 'zh_CN',
            success: function (res) {
              that.globalData.userInfo = res.userInfo
            },
            fail: function () {
              // fail
              console.log("获取失败！")
            },
            complete: function (res) {
              wx.login({
                success: function () {

            }

          })
        }
      })
      
    }

     
   











    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  // getUserInfo: function (cb) {
  //   var that = this;
  //   if (this.globalData.userInfo) {

  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function () {

  //         wx.getUserInfo({
  //           lang: 'zh_CN',
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  onShow: function () {
    var that = this;
    if (this.globalData.userInfo) {

      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
     
          wx.getUserInfo({
            lang: 'zh_CN',
            success: function (res) {
              // console.log(res);
              that.globalData.userInfo = res.userInfo
            },
            fail: function () {
              // fail
              console.log("获取失败！")
            },
            complete: function (res) {
              wx.login({
                success: function () {
            }

          })
        }
      })

    }

  },

  globalData: {
    userInfo: null,
    openid: null
  }
})
