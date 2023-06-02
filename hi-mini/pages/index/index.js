// index.js
import { formatNum } from "../../utils/common.js"
import { formatTime } from "../../utils/common.js"
import { listNav, listNews } from "../../api/apis.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navArr: [],
        newsArr: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNavData();
        this.getNews();
    },

    //获取导航数据
    getNavData() {
        listNav().then(res => {
            console.log(res);
            this.setData({
                navArr: res.data
            })
        })
    },

    getNews() {
        listNews({
            limit: 3,
            hot: true
        }).then(res => {
            res.data.forEach(element => {
                element.view_count = formatNum(element.view_count)
                element.publish_date = formatTime(element.publish_date)
            });
            this.setData({
                newsArr: res.data
            })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})