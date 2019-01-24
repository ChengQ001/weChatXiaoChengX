Page({
  data: {
    nickName: '',
    userInfoAvatar: '',
    sex: '',
    province: '',
    city: ''
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  onLoad: function () {

    var that = this;
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (res) {
        var app = getApp();
        app.globalData.userInfo = res.userInfo;
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
        switch (res.userInfo.gender) {
          case 0:
            that.setData({
              sex: '未知'
            })
            break;
          case 1:
            that.setData({
              sex: '男'
            })
            break;
          case 2:
            that.setData({
              sex: '女'
            })
            break;
        }
      },
      fail: function () {
        // fail
        console.log("获取失败！")
      },
      complete: function (res) {
        // complete 
        wx.login({
          success: function (res) {
            // console.log(res.code)
           
          
          }
        });
        //console.log("获取用户信息完成！")
      }
    })

    getUserInfo();
  },

  getUserInfo: function (e) {
    var that = this;
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (res) {
        var app = getApp();
        app.globalData.userInfo = res.userInfo;
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
        switch (res.userInfo.gender) {
          case 0:
            that.setData({
              sex: '未知'
            })
            break;
          case 1:
            that.setData({
              sex: '男'
            })
            break;
          case 2:
            that.setData({
              sex: '女'
            })
            break;
        }
      },
      fail: function () {
        wx.switchTab({
          url: '/pages/love/love'
        })
      },
      complete: function (res) {
        // complete 
        wx.login({
          success: function (res) {
            // console.log('asd');
            wx.switchTab({
              url: '/pages/love/love'
            })
          }
        });
        //console.log("获取用户信息完成！")
      }

    })


    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://qianqian.chengq.top/home/GetCode?json_code=' + res.code,
            method: 'get',
            // data: {
            //   code: res.code
            // },
            header: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            success: function (res) {
              that.setData({
                motto: '标识:' + JSON.parse(res.data.data).openid
              })
            }
          })
        }
      }
    });
  },
  onShow: function () {
  }
})

function getUserInfo() {
  wx.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'https://qianqian.chengq.top/home/GetCode?json_code=' + res.code,
          method: 'get',
          // data: {
          //   code: res.code
          // },
          header: {
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          success: function (res) {
            getApp().globalData.openid = JSON.parse(res.data.data).openid;

          }
        })
      }
    }
  });
}