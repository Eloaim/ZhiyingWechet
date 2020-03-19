// pages/report/report.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    volunteers:[]
  },
  popConfirm: function () {
    wx.showModal({
      title: '完整报告请上网站查询',
      content: 'https://www.zhiyingguihua.com/',
      success: function (res) {
        // if (res.confirm) {
        //   console.log('点击确认回调')
        // } else {
        //   console.log('点击取消回调')
        // }
      }
    })
  },
  ToSchoolDetail: function(){

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
    this.setData({
      volunteers: app.globalData.volunteers
    })
    console.log('volunteers', app.globalData.volunteers);
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