(function ($) {
    $("input").on("click", function () {
        var s = $(this).attr("data-id");
        if (s == "jdcp_btn") {
            $(".jdcp").find("input").attr("disabled", false);
            $(".fzfz,.qgcp").find("input").attr("disabled", true);
        } else if (s == "fzfz_btn") {
            $(".fzfz").find("input").attr("disabled", false);
            $(".jdcp,.qgcp").find("input").attr("disabled", true);
        } else if (s == "qgcp_btn") {
            $(".qgcp").find("input").attr("disabled", false);
            $(".jdcp,.fzfz").find("input").attr("disabled", true);
        } else if (s == "ncp_btn") {
            $(".jdcp,.fzfz,.qgcp").find("input").attr("disabled", true);
        } else if (s == "hgcp_btn") {
            $(".jdcp,.fzfz,.qgcp").find("input").attr("disabled", true);
        } else if (s == "kcp_btn") {
            $(".jdcp,.fzfz,.qgcp").find("input").attr("disabled", true);
        } else if (s == "qtcp_btn") {
            $(".jdcp,.fzfz,.qgcp").find("input").attr("disabled", true);
        } else if (s == "zypp_btn") {
            $(".zypp").find("input").attr("disabled", false);
            $(".ppmc").attr("disabled", false);
        } else if (s == "zyqq") {
            $(".zypp").find("input").attr("disabled", true);
            $(".ppmc").attr("disabled", true);
        } else if (s == "jbzc_btn") {
            $(".jbzc").find("input").attr("disabled", false);
            $(".cnbz").find("input").attr("disabled", true);
        } else if (s == "cnbz_btn") {
            $(".cnbz").find("input").attr("disabled", false);
            $(".jbzc").find("input").attr("disabled", true);
        } else if (s == "pptr_btn_a") {
            $(".pptr").find("input").attr("disabled", true);
        } else if (s == "pptr_btn_b") {
            $(".pptr").find("input").attr("disabled", false);
        }
    });

    //企业填报数据包含海关代码有 赋值
    $("#hgdm").on("keypress", function () {
        $(".search_plus").show();
    });

    $("#hgdm_plus").on("click", function () {
        $(".hgdm_list_c").show();
        var hgdm = $("#hgdm");
        var hgdm_val = $("#hgdm_val");
        if (hgdm.val() != "") {
            if (hgdm_val.val() == "") {
                hgdm_val.val(function (i, v) {
                    return v + hgdm.val();
                });
                hgdm.val("");
            } else {
                hgdm_val.val(function (i, v) {
                    return v + "," + hgdm.val();
                });
                hgdm.val("");
            }
        }
    });

    $("#hgdm_m").on("click", function () {
        $("#hgdm_val").val("");
    });

    $(".no3 > input").on("click", function () {
        var $this = $(this).val();
        if ($this === "0") {
            $(".no4").show();
            $(".no5").hide();
        } else if ($this === "1") {
            $(".no5").show();
            $(".no4").hide();
        }
    });
})(jQuery);