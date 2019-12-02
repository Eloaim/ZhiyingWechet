// pages/all-major-category/all-major-category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    majors:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/major/getMajorCategory',
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      method: 'post',
      success(res) {
        console.log(res.data.data);
        that.setData({
          majors: res.data.data
        });
      }
    })
  },

  
})