// components/news-item/news-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ""
        },
        author: {
            type: String,
            value: ""
        },
        item: {
            type: Object,
            value: {
                title: '测试标题', //默认值
                author: 'xoxo' //默认值
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})