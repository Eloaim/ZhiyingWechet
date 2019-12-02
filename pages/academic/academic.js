// pages/academic/academic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: ['黑龙江'],
    columns2: ['本一批', '本二批', '专科批'],
    show: false,
    value: "",  //黑龙江
    value2: "", //本科一批
    show2: false,
    score:'', //成绩
    radio:'' //1理科 2文科
  },
  onScoreChange(e){
    this.setData({
      score: e.detail
    });
  },
  onChange(event) {
    var that = this;
    this.setData({
      radio: event.detail,
    });
  },
  showPopup() {
    this.setData({ show: true });
  },
  showPopup2() {
    this.setData({ show2: true });
  },
  onConfirm(event){
    console.log(event);
    this.setData({
       value: event.detail.value,
       show: false
       });
  },
  onConfirm2(event) {
    console.log(event);
    this.setData({
      value2: event.detail.value,
      show2: false
    });
  },
  goToChooseVolunteer(e){
    if (this.data.value==""){
      wx.showToast({
        title: '请选择省份',
        icon:'none'
      })
      return;
    } else if (this.data.radio == ""){
      wx.showToast({
        title: '请选择科目',
        icon: 'none'
      })
      return;
    } else if (this.data.score == ""){
      wx.showToast({
        title: '请输入成绩',
        icon: 'none'
      })
      return;
    } else if (this.data.value2 == ""){
      wx.showToast({
        title: '请选择批次',
        icon: 'none'
      })
      return;
    }else {
      wx.navigateTo({
        url: '/pages/choose-volunteer/choose-volunteer?examYear=2019' + '&lotId=' + this.data.value2 + '&score=' + this.data.score + '&accountCategory=' + this.data.radio,
      })
    }
    
  },
  onClose() {
    this.setData({ show: false });
  },
  onClose2() {
    this.setData({ show2: false });
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