
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    Hei: "",
    newslist: [],
    imgUrls: [
      '/images/image_select_1.jpg',
      '/images/image_select_2.jpg',
      '/images/image_select_3.jpg'
    ],
    rankList:[]
  },

  detailData: function (uuid) {
    var that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/news/getNewsDetail',
      data: {

        uuid: "18f32fcc-09f2-11ea-bc45-00bb607b0d26"

      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      method: 'post',
      success(res) {
       console.log(res);
      }
    })
  },
  loadData: function(){
    var that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/index/getIndexData',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'post',
      success(res) {
       console.log(res);
        
        that.setData({
          newslist: res.data.data.majorNewsList,
          rankList: res.data.data.rankNewsList
          
        })
       // console.log(res.data.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.loadData();
    that.detailData();
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})