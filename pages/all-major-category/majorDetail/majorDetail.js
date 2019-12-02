// pages/all-major-category/majorDetail/majorDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    majorTile:[],
    majorDetail:[]
  },
  getMajorProfile: function (e) {
    let that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/major/getMajorProfile',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        majorTwoCode: e.major_level_two_code + ''
      },
      method: 'post',
      success(res) {
        
        that.setData({
          majorTile: res.data.data
        })

      }
    })
  },
  getMajorDetail: function (e) {
    let that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/major/getMajorDetail',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        majorTwoCode: e.major_level_two_code + ''
      },
      method: 'post',
      success(res) {

        that.setData({
          majorDetail: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //console.log(options);
    that.getMajorProfile(options);
    that.getMajorDetail(options);
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