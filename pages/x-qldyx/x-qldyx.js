/**
 * Created by 18048 on 2017/6/5.
 */
function getRandomColor () {
    var rgb = []
    for (var i = 0 ; i < 3; ++i){
        var color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}
Page({
    onReady: function (res) {
        this.videoContext = wx.createVideoContext('myVideo')
    },
    inputValue: '',
    data: {
        src: '',
        danmuList: [
            {
                text: '测试弹幕',
                color: '#ff0000',
                time: 1
            }
            ]
    },
    bindInputBlur: function(e) {
        this.inputValue = e.detail.value
    },
    bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front','back'],
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    bindSendDanmu: function () {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: getRandomColor()
        })
    }
})