// pages/ my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: null,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  help:function(){
    wx.navigateTo({
      url: '../help/help',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  about:function(){
    wx.navigateTo({
      url: '../about/about',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    var that = this;
    that.countDown();
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
        console.log(userInfo);
      }
    })

  },
  countDown() {
    var that = this
    var starttime = "";
    var endTime;
    var str1;
    var str2 = "/06/07 00:00:00";
    var date = new Date(); //现在时间
    var now = date.getTime(); //现在时间戳
    var allTime;
    if (date.getMonth() + 1 <= 5 || (date.getMonth() + 1 <= 6 && date.getDate() <= 7)) {
      //console.log(date)
      starttime = date.getFullYear()+'';
      starttime = starttime.concat(str2)
      endTime = new Date(starttime).getTime()
      allTime = endTime - now;
    }
    else {
      var n = date.getFullYear() + 1;
      //console.log(n);
      //console.log(date);
      //console.log(date.getMonth());
      //console.log(date.getDate());
      starttime = n.toString();
      starttime = starttime.concat(str2)
      endTime = new Date(starttime).getTime();
      allTime = endTime - now;
    }
    var d, h, m, s;

    if (allTime > 0) {
      // m = Math.floor(allTime / 1000 / 60 % 60);
      // s = Math.floor(allTime / 1000 % 60);
      d = Math.floor(allTime / 1000 / 60 / 60 / 24);
      // h = Math.floor(allTime / 1000 / 60 / 60 % 24);
      that.setData({
        countdown: d,
      })
    } else {
      that.setData({
        countdown: '00',
      })
    }

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

  },


})