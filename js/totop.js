$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

function randomQuotesIdx(start =0, end = 100) {
    return parseInt((end - start + 1) * Math.random() + start);
}

function getQuotesJsonArray(file, callback) {
    $.getJSON(file, function(data){
        callback(data)
    });
}

$(document).ready(function (){
    // var quotes = [
    //     ["时来谁不来,时不来谁来","兰陵笑笑声", "《金瓶梅》"],
    //     ["投资成功与否并非取决于你了解的东西，而在于你能否老老实实地承认你所不知道的东西！\n" +
    //     "投资人并不需要做对很多事情，重要的是不要犯重大的错误！", "巴菲特"],
    //     ["好的程序代码本身就是最好的文档", "Steve McConnell", "《代码大全》"],
    // ]
    getQuotesJsonArray("/js/quotes.json", function (quotes) {
        var idx = randomQuotesIdx(0,quotes.length-1)
        var quote = quotes[idx]
        var tmpHtml
        if (quote !== undefined) {
            tmpHtml = quote[0] +  " —— " + quote[1] + " " + (quote[2] ? "《"+quote[2] +"》": "");
        }
        $("#quotes").text(tmpHtml)
    })
})
