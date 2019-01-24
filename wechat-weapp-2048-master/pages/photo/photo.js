var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
    // content_type: "",
    // createtime
    //   :
    //   "",
    // id
    //   :
    //   null,
    // img_str
    //   :
    //   "",
    // player_url
    //   :
    //   "",
    // qianmian_url
    //   :
    //   "",
    // remark
    //   :
    //   "",
    // title
    //   : ""
  },

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
    GetData(this);
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
    GetData(this);
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


function GetData(that) {
  wx.request({
    url: 'https://qianqian.chengq.top/home/GetPhpData',
    method: 'get',
    // data: {
    //   code: res.code
    // },
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    success: function (res) {
      for (var i in res.data.data) {
        res.data.data[i].createtime = util.date_time(res.data.data[i].createtime)
      }
       that.setData({
         list: res.data.data
       })
    }
  })
}