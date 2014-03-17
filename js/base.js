jQuery.fn.tabs = function (control) {
    var element = $(this);
    control = $(control);

    //Delegate（委派）
    element.delegate("li", "click", function () {
        //遍历选项卡名称
        var tabName = $(this).attr("data-tab");

        //在点击选项卡时触发自定义事件
        element.trigger("change.tabs", tabName);
    });

    //绑定到自定义事件
    element.bind("change.tabs", function (e, tabName) {
        element.find("li").removeClass("active");
        element.find(">[data-tab='" + tabName + "']").addClass("active");
    });

    element.bind("change.tabs", function (e, tabName) {
        control.find(">[data-tab]").removeClass("active");
        control.find(">[data-tab='" + tabName + "']").addClass("active");
    });

    //激活第1个选项卡
    var firstName = element.find("li:first").attr("data-tab");
    element.trigger("change.tabs", firstName);

    return this;
};

jQuery.fn.allChose = function (opts) {
    var set = $.extend({
        name: ''
    }, opts || {});
    var T = $(this),
        items = $('input[type="checkbox"][name="' + set.name + '"]');
    T.click(function () {
        items.prop('checked', this.checked);
    });
    items.click(function () {
        T.prop('checked', items.not(':checked').length === 0);
    });
};

(function ($) {
    //搜索显隐
    $(".search_list").on("click", function () {
        $(".search").toggle();
    });

    //导航子栏目显隐
    $(".H_bot > ul > li").hover(function () {
        $(this).find("ul").show();
    }, function () {
        $(this).find("ul").hide();
    });

    //全选
    $('.allChose').each(function () {
        $(this).allChose({name: 'userId'});
        $(this).click(function () {
            $('.allChose').prop('checked', this.checked);
        });
    });

    //首页tabs
    $(".user_db_tabs").tabs(".user_db");
    $(".db_tabs").tabs(".db");
    $(".admin_chart_tabs").tabs(".admin_chart");
    $(".news_tabs").tabs(".news");
})(jQuery);