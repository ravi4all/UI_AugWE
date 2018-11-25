$(document).ready(function() {
    var f_num = $("#box_1");
    var s_num = $("#box_2");
    // $("#add").on("click", function() {
    //     var result = parseInt(f_num.val()) + parseInt(s_num.val());
    //     $("#res").html(result);
    // })

    $("button").click(function() {
        var opr = $(this).html();
        var result = f_num.val() + opr + s_num.val();
        $("#res").html(eval(result));
    })

});