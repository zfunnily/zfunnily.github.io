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

function cpCode() {
    
}


$(document).ready(function (){
    getQuotesJsonArray("/js/quotes.json", function (quotes) {
        var idx = randomQuotesIdx(0,quotes.length-1)
        var quote = quotes[idx]
        var tmpHtml, bookname, author
        if (quote !== undefined) {
            author = quote[1] ? "\n —— " + quote[1]: ""
            if (author == "") {
                bookname = "\n —— "
            }
            bookname = quote[2] ? " 《"+quote[2] +"》": ""
            tmpHtml =  quote[0] + author + bookname
        }
        document.getElementById('quotes').innerText = tmpHtml
    })

    //暗主题跟主题切换
    // const options = {
    //     bottom: '64px', // default: '32px'
    //     right: 'unset', // default: '32px'
    //     left: '32px', // default: 'unset'
    //     time: '0.5s', // default: '0.3s'
    //     mixColor: '#fff', // default: '#fff'
    //     backgroundColor: '#fff',  // default: '#fff'
    //     buttonColorDark: '#100f2c',  // default: '#100f2c'
    //     buttonColorLight: '#fff', // default: '#fff'
    //     saveInCookies: false, // default: true,
    //     label: '🌓', // default: ''
    //     autoMatchOsTheme: true // default: true
    // }

    // function addDarkmodeWidget() {
    //     const darkmode = new Darkmode(options)
    //     darkmode.showWidget()
    // }
    // window.addEventListener('load', addDarkmodeWidget);

    //复制按钮
   $(".code-detail").each(function(){
    var t = $(this).children("highlight").text();
    var btn = $('<span class="copy">copy</span>').attr(
        "data-clipboard-text",
        t
      );
    $(this).prepend(btn);
    var c = new ClipboardJS(btn[0]);
    c.on("success", function() {
      btn.addClass("copyed").text("success");
    });
    c.on("error", function() {
      btn.text("fail");
    });
    btn.mouseleave(function() {
      btn.text("copy").removeClass("copyed");
    });
    document.getElementsByClassName('code-detail').addEventListener('click', copyArticle, false);
   })
    
})
