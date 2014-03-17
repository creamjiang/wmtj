(function ($) {
    //上月数据展现
    $('.D_tips').poshytip({
        className: 'tip-yellowsimple',
        showTimeout: 100,
        alignTo: 'target',
        alignX: 'right',
        alignY: 'center',
        offsetX: 5
    });

    $("input").on("click", function () {
        var s = $(this).attr("data-id");
        var v = $(this).parent().parent().parent().next().find("input");
        if (s == "tj_btn") {
            v.attr("disabled", false);
            $("#ss,#zc,#yg,#qt").find("input").attr("disabled", true);
        } else if (s == "ss_btn") {
            v.attr("disabled", false);
            $("#tj,#zc,#yg,#qt").find("input").attr("disabled", true);
        } else if (s == "zc_btn") {
            v.attr("disabled", false);
            $("#ss,#tj,#yg,#qt").find("input").attr("disabled", true);
        } else if (s == "yg_btn") {
            v.attr("disabled", false);
            $("#ss,#zc,#tj,#qt").find("input").attr("disabled", true);
        } else if (s == "qt_btn") {
            v.attr("disabled", false);
            $("#ss,#zc,#tj,#yg").find("input").attr("disabled", true);
        }
    });
})(jQuery);