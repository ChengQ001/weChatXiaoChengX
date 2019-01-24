const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    msgData:
      [
        {
          child_id: 1,
          msg:
            "泡澡水不要太热。",
          checked: ''
        },//双引号
        {
          child_id: 2,
          msg:
            "面部比较干，想补个水。",
          checked: ''
        },
        {
          child_id: 3,
          msg:
            "我只有2小时，您看着安排吧。",
          checked: ''
        },
        {
          child_id: 4,
          msg:
            "我想把眉毛在修下。",
          checked: ''
        },
        {
          child_id: 5,
          msg:
            "给我清个痘痘。",
          checked: ''
        },
        {
          child_id: 6,
          msg:
            "头疼，能轻点按。",
          checked: ''
        }
      ],
    message: '',
    message_id: [],
  },
  bindTextAreaChange: function (e) {
    var that = this
    that.setData({
      message: e.detail.value
    })
  },

  click: function (e) {
    var that = this;
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    var value = [];
    value = this.data.message_id;
    var array_i = this.in_array(id, value);
    var chekeds = that.data.msgData;
    var msg = chekeds[index].msg;
    var message = that.data.message;
    if (!e.currentTarget.dataset.checked) {
      chekeds[index].checked = true
      that.setData({
        message: message + msg
      })
    } else {
      chekeds[index].checked = false
      that.setData({
        message: message.replace(msg, '')
      })
    }
    that.setData({
      msgData: chekeds
    })
    if (array_i) {
      value.splice(array_i, 1);
    } else {
      value.push(id);
    }
    this.setData({
      message_id: value,
    })
  },
  in_array: function (search, array) {
    for (var i in array) {
      if (array[i] == search) {
        return i;
      }
    }
    return false;
  },
  submit: function () {
    var value = [];
    var message = this.data.message;
    var msgData = this.data.msgData;
    console.log(message)
    if (message == '' && !value.length) {
      wx.showToast({
        title: '暂无选择项目',
        icon: 'none'
      })
      return;
    }
    app.globalData.message = message;
    for (var i = 0; i < msgData.length; i++) {
      if (message.indexOf(msgData[i].msg) > -1) {
        value[i] = msgData[i].child_id;
      }
    }
    wx.request({
      url: 'https://qianqian.chengq.top/home/AddPhp',
      method: 'POST',
      data: { neirong: message, openid: app.globalData.openid, img_url: app.globalData.userInfo.avatarUrl, nick_name: app.globalData.userInfo.nickName, city: app.globalData.userInfo.city,remark:'1' },
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.code==0) {
          wx.showToast({
            title: '捎话成功',
            success:function(){
              
            }
          })
      
          // wx.switchTab({
          //   url: '/pages/message/message',
          //   success: function (e) {
          //     var page = getCurrentPages().pop();
          //     if (page == undefined || page == null) return;
          //     page.onLoad();
          //   }
          // })
          // app.globalData.message = message;
          
        }
        else
        { 
          wx.showToast({
            title: '捎话失败',
            success: function () {

            }
          })
        }

       
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'https://www.njnrkj.com/app/public/index.php/index/index/serversle',
    //   method: 'POST',
    //   data: { openId: app.globalData.openId },
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     if (res.data) {
    //       var message_id = res.data.message_id;
    //       var value = that.data.msgData;
    //       var message = res.data.message;
    //       that.setData({
    //         message: message
    //       });
    //       for (var i = 0; i < value.length; i++) {
    //         if (that.in_array(value[i].child_id, message_id)) {
    //           value[i].checked = true;
    //           that.setData({
    //             msgData: value,
    //           });
    //         }
    //       }
    //     }
    //   }
    // })

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
     
      wx.stopPullDownRefresh();
     
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
