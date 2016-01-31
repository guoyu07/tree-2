/**
 * Created by albert on 16-1-28.
 */
$(function () {
    alert("http%3a%2f%2f1.blesstree.sinaapp.com%2fwechat%2ffirst&response_type=code&scope_type=snsapi_base");
    //alert($.lqcGetUrlParam("test"));
    if($.lqcGetUrlParam("first") == 1){
        $("#black-mask").show();
        $("#water-success").show();
    }
})