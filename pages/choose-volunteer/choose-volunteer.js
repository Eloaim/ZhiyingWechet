// pages/choose-volunteer/choose-volunteer.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountCategory:'',
    examYear:'',
    lotId:'',
    score:'',
    volunteers:[],
  },
  goNextStep(){
    console.log('ssss')
  },
  onShow(){
    this.setData({
      volunteers: app.globalData.volunteers
    })
    //console.log('1111')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(app.globalData.volunteers)
    let lotId = null;
    switch (options.lotId){
      case "提前批":
        lotId = 1;
      break;
      case "本一批":
        lotId = 2;
        break;
      case "本二批":
        lotId = 3;
        break;
      case "专科批":
        lotId = 4;
        break;
      default:
        lotId = 2;
    }
    this.setData({
      accountCategory: options.accountCategory,
      examYear: options.examYear,
      lotId: lotId,
      score: options.score
    });

    
    
  },
  addSchool(e){
    let index = e.currentTarget.dataset.index;
    let voulunteerid = e.currentTarget.dataset.voulunteerid;
    console.log("lotId", this.data.lotId);
    console.log("gatherValue", voulunteerid);
    console.log("examYear", this.data.examYear);
    console.log("score", this.data.score);
    console.log("accountCategory", this.data.accountCategory);
    console.log("index", index);

    wx.navigateTo({
      url: '/pages/add-school/add-school?lotId=' + this.data.lotId + '&gatherValue=' + voulunteerid
        + '&examYear=' + this.data.examYear + '&score=' + this.data.score + '&accountCategory=' + this.data.accountCategory
        + '&index=' + index,
    })
  }
})