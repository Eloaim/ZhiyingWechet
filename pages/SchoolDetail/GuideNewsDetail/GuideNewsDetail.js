// pages/SchoolDetail/GuideNewsDetail/GuideNewsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options);
      wx:wx.request({
        url: 'https://www.zhiyingguihua.com:7500/school/getEnrollmentGuideNewsDetail',
        data: {
          uuid: options.uuid
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res);
          that.setData({
            content: res.data.data.content
          })
        },
        fail: function(res) {},
        complete: function(res) {},
      })
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