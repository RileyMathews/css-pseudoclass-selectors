$("ul>li").mouseover(() => {
    $("ul").css("background-color", "grey")
})

$("ul>li").mouseout(() => {
    $("ul").css("background-color", "initial")
})

$("ul>li").click(() => {
    $("ul").animate({
        "font-size": "+=5px"
    }, 80).animate({
        "font-size": "-=5px"
    }, 80)
})