// pages/we/we.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getdate(this);
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
    getdate(this);
   
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

  },



})

function getdate(that) {
  var current = Date();
  var date = "2018-06-19 16:23:56";
  date = date.replace(/-/g, '/');
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = seconds % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  that.setData({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  })

  setTimeout(function () {
    // 放在最后--
    getdate(that);
  }, 1000);
}


