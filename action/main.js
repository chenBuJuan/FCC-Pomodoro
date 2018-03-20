$(document).ready(function(){
    var time = $("#time");
    var start = $("#start");
    var reset = $("#reset");
    var minute = $("#minute");
    var second = $("#second");
    var num = $("#num");

    var timer;

    time.bind("input", function(event){
        if(!/^\d+$/.test(time.val())){
            time.val("");
            time.attr("placeholder", "输入非法!");
        }
    });
    start.bind("click", function(){
        clearInterval(timer);

        if(time.val()){
            minute.text(setNum(time.val()));
        }else{
            minute.text("25");
        }

        second.text("00");

        timer = setInterval(function(){
            if(second.text() == "00" && minute.text() != "00"){
                second.text("59");
                minute.text(setNum(minute.text() - 1));
            }else if(second.text() == "00" && minute.text() == "00"){
                clearInterval(timer);
                num.text(num.text() - 0 + 1);
            }else if(second.text() != "00"){
                second.text(setNum(second.text() - 1));
            }
        }, 1000);
    });
    reset.bind("click", function(){
        clearInterval(timer);
        minute.text("25");
        second.text("00");
    });
});

function setNum(num){
    if(num < 10){
        return "0" + num;
    }else{
        return num;
    }
}