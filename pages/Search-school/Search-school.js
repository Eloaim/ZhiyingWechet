// pages/Search-school/Search-school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    schoollist: [],
    init: [],
    loadHidden: false,
    moreHidden: false,
    schoolpage: 1,
    pageLoading: false
  },

  loadOnce: function(e){
    console.log(e.currentTarget.dataset.school_id);
    
      this.pageLoading = true;
      wx.navigateTo({
        url: '../SchoolDetail/SchoolDetail?school_id='+e.currentTarget.dataset.school_id,
      })
   
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onCancel: function(event){
    let that = this;
    that.setData({ moreHidden: false });
    that.schoolpage = 1;
    that.data.schoollist = that.data.init;
    that.schoollist(that.data.schoolpage);
  },
  search: function(event){
    let that = this;
    that.setData({ moreHidden: true });
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/searchSchool',
      data: {
        areaFeatureValues:[],
        natureValues: [],
        page: 1,
        propertyValues: [],
        schoolName: event.detail,
        typeValues:[]
      },
      header: {},
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        that.setData({
          schoolpage:1,
          schoollist: res.data.data.schoolList
        })
      
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  schoollist: function (e) {
    var that = this;
    that.setData({ loadHidden: false });
    let tmp = e;
    let templist;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/searchSchool',
      data: {
        areaFeatureValues: [],
        natureValues: [],
        page: tmp,
        propertyValues: [],
        schoolName: "",
        typeValues: [],

      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      method: 'post',
      success(res) {
        console.log(res);
        var templist = that.data.schoollist;
        var newlist = templist.concat(res.data.data.schoolList);
        that.setData({
          schoollist: newlist
        })
      },
      complete: function () {
        //显示出加载中的提示
        that.setData({ loadHidden: true })
      }
    })
  },
  loadMore:function(){
    var that = this;
    that.data.schoolpage += 1;
    that.schoollist(that.data.schoolpage);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.schoollist(that.data.schoolpage);
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
    this.pageLoading = true;
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