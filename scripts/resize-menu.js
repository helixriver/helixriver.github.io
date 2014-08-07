$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("full").addClass("small");
    } else{
        $("header").removeClass("small").addClass("full");
    }
});