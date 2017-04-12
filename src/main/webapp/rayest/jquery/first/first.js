/**
 * Created by lirui on 2017/4/12.
 */

// DOM加载完成之后，才会执行此类方法
$(document).ready(function () {
    // 获取button元素，当感知到该元素被点击后，执行click事件
    $("button").click(function () {
        // 获取class为test的元素，对其进行hide和animate操作
        $(".test").hide();
        $(".change").animate({
            height: '30px'
        }).css("color", "red");
    });
});


