import { listNav, queryProduct } from "../../api/apis.js"
let navid;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navActive: 0,
        navArr: [],
        proArr: [],
        loading: false,
        isData: false
    },

    //导航切换
    navChange(event) {
        let index;
        if (event.detail) {
            index = event.detail.index;
        } else {
            index = event;
        }
        navid = this.data.navArr[index]._id
        this.setData({
            proArr: [],
            isData: false,
            loading: false,
            navActive: Number(index)
        })
        this.getProductList();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        let { idx } = options;
        await this.getNavList();
        if (idx) {
            this.navChange(idx);
        } else {
            navid = this.data.navArr[0]._id;
            this.getProductList();
        }
    },

    async getNavList() {
        await listNav().then(res => {
            console.log(res);
            this.setData({
                navArr: res.data
            })
        })
    },

    getProductList(s = 0) {
        this.setData({
            loading: true
        })
        queryProduct({
            navid: navid,
            size: s
        }).then(res => {
            console.log(res);
            let oldData = this.data.proArr;
            let newData = oldData.concat(res.data);
            this.setData({
                proArr: newData,
                loading: false
            })
            if (res.total == this.data.proArr.length) {
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (this.data.isData) return;
        this.getProductList(this.data.proArr.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})