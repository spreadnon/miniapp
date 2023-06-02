import { listNews } from "../../api/apis.js"
import { formatNum, formatTime } from "../../utils/common.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsArr: [],
        loading: false,
        isData: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNews();
    },
    getNews(size = 0) {
        this.setData({
            loading: true
        })

        listNews({
            limit: 8,
            size
        }).then(res => {
            console.log(res)
            res.data.forEach(element => {
                element.view_count = formatNum(element.view_count)
                element.publish_date = formatTime(element.publish_date)
            });
            let oldData = this.data.newsArr
                // let newData = [...oldData, ...res.data]
            let newData = oldData.concat(res.data);
            wx.stopPullDownRefresh()
            this.setData({
                newsArr: newData,
                loading: false
            });
            if (this.data.newsArr.length == res.total) {
                this.setData({
                    isData: true
                })
            }
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
        this.setData({
            newsArr: [],
            isData: false,
            loading: false
        })
        this.getNews()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (this.data.isData) return;
        this.getNews(this.data.newsArr.length);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})