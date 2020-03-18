const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schools:[],
    index:null,
  },
  goBack(e){
    console.log('goBack',e)
    app.globalData.volunteers[this.data.index].school = e.currentTarget.dataset.schoolname;
    app.globalData.volunteers[this.data.index].scoreAndRank = e.currentTarget.dataset.scoreandrank;
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * accountCategory: "1"
        examYear: "2019"
        gatherValue: "a"
        index: "0"
        lotId: "1"
        score: "600"
     */
    this.setData({
      index: options.index
    });
   
    let that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/miniAppGetSchool',
      // url: 'http://192.168.1.48:1208/school/miniAppGetSchool',
      data: {
        lotId: parseInt(options.lotId),
        gatherValue: options.voulunteerid,
        examYear: parseInt(options.examYear),
        score: parseInt(options.score),
        accountCategory: parseInt(options.accountCategory)
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      method: 'post',
      success(res) {
        // console.log(res.data.data);
        console.log(res.data.data);
        that.setData({
          schools: res.data.data
        });
      }
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