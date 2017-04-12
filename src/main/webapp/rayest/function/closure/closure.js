/**
 * Created by lirui on 2017/4/8.
 */

// 创建一个函数，用于生成一个数组，该数组用于存放函数
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        // 数组的每一个值都是一个函数，在适当的时候被调用
        result[i] = function () {
            return i;
        };
    }
    // 此时 i = 10，result = null; 因为 result 被垃圾回收了，i 还在被引用，未被收回，其值为10
    console.log(result);
    return result;
}

var functions = createFunctions();
for (var i = 0; i < functions.length; i++) {
    // 内部函数在外部被调用时，形成闭包
    console.log(functions[i]());
}