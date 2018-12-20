import util from '../../utils/util.js'
import common from '../../utils/common.js';
import api from '../../utils/api.js';
// pages/question_list/question_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  goto: function (e) {
    util.goto(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.post(api.question_url,{},(res)=>{
        this.setData({
          value:res.datas
        })
    },"")
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
})