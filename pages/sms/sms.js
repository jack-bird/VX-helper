function checkPhone(phones){
    var numbers = phones;
    var trueNumers = [];
    var error = 0;
    var repeat = 0;
    //去重和检查格式
    phones.forEach(function(value,index,array){
        if (trueNumers.indexOf(value) === -1){
            if((/^1[34578]{1}\d{9}$/.test(value))){
                trueNumers.push(value);
            } else {
                error ++;
            }
        } else {
            repeat ++;
        }
    });
    if (trueNumers.length <= 0){
        this.setData({
            prompt:"请输入至少一个正确的号码..."
        })
    }
    var trueDome = '';
    for (var i in  trueNumers){
        trueDome += trueNumers[i]+',';
    }
    return trueDome;
}
Page({
    onReady: function (res) {
    },
    data:{
        config:{
            tipshow_o:"show",
            tipshow_s:"hidden"
        }
    },
    switchChange:function(e){
        if(e.detail.value){
            this.setData({
                config:{
                    tipshow_o:"hidden",
                    tipshow_s:"show"
                    }
            })
        }else{
            this.setData({
                config:{
                    tipshow_o:"show",
                    tipshow_s:"hidden"
                }
            })
        }
    },
    getPhone:function(e){
        var phone = e.detail.value;
        if(phone != ''){
            var phones = phone.split(',');
            var trueDome = checkPhone(phones);
            this.setData({
                td:trueDome
            })
        }else{
            this.setData({
                prompt:"请输入手机号码..."
            })
        }

    },
    formSubmit:function(e){
        console.log(e.detail.value.phone)
        console.log(e.detail.value.content)
    }
})