import util from '../../../utils/util.js'
const app = getApp()
import common from '../../../utils/common.js';
import api from '../../../utils/api.js';

// pages/my_join_detail/my_join_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this,
      order_id = options.id;

    this.setData({
      id: order_id
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
    let self = this;

    common.post(api.join_detail_url, { formdata: true, order_id: self.data.id }, res => {
      if (200 == res.code) {
        let data = res.datas;

        self.setData({
          datas: data
        })
      } else {
        wx.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    }, '')
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