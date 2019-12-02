// pages/SchoolDetail/SchoolDetail.js
import moment from '../../utils/moment.min.js'

var id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    schooldetail:[],
    guideNews:[],
    schoolRank:[],
    schoolScoreList:[],
    type: 1,
    time:""
  },
  
  onChange(event) {
    var that = this;
    that.setData({
      radio: event.detail,
      type: event.detail
    });
    that.getSchoolScoreList();
  },
  schoolDetail:function(e){
    //console.log(moment().format('YYYY-MM-DD'));
    var that = this;
   
  
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/getSchoolDetail',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data:{
        schoolId: Number(e.school_id)
      },
      method: 'post',
      success(res) {
        //console.log('schoolDetail',res);
        that.setData({
          schooldetail:res.data.data
        })
      
      }
    })
  },
  getEnrollmentGuideNews: function (e) {
    var that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/getEnrollmentGuideNews',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        schoolId: Number(e.school_id)
      },
      method: 'post',
      success(res) {
        console.log('GuideNews',res.data);
        //moment(res.data.data.time).format('YYYY-MM-DD');
 
        that.setData({
          guideNews: res.data.data,
          time: moment(res.data.data.time).format('YYYY-MM-DD')
        })
       
      }
    })
  },
  getSchoolRank: function (e) {
    var that = this;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/getSchoolRank',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        schoolId: Number(e.school_id)
      },
      method: 'post',
      success(res) {
        console.log('SchoolRank',res);
        that.setData({
          schoolRank:res.data.data
        })

      }
    })
  },
  getSchoolScoreList: function (type) {
    var that = this;
    var tmptyp = that.data.type;
    wx.request({
      url: 'https://www.zhiyingguihua.com:7500/school/getSchoolScoreList',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        schoolId: id,
        accountCategory: tmptyp
      },
      method: 'post',
      success(res) {
        //console.log("SchoolScoreList");
        console.log("SchoolScoreList",res);
        that.setData({
          schoolScoreList: res.data.data
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    id = Number(options.school_id);
    that.schoolDetail(options);
    that.getEnrollmentGuideNews(options);
    that.getSchoolRank(options);
    that.getSchoolScoreList();
  
    
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
