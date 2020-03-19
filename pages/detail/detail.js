// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paper:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  detailData: function (e) {
    var that = this;
    var tem = e
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/news/getNewsDetail',
      data: {

        uuid: e.uuid

      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      method: 'post',
      success(res) {
        console.log(res);
        that.setData({
          paper: res.data.data.content.replace(/<table[^>]*>/gi, function (match, capture) {
            return match.replace(/width:(.*)/gi, '');
          })
        })
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    that.detailData(options)
    console.log(options);
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