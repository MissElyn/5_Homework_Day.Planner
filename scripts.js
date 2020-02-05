setInterval(function () {
    $("#date").text(moment().format("MMMM DD, YYYY h:mm"));
}, 1000 * 1)

//console.log(date);
function getClass(hour){
    var now = moment()
    var scheduledHour = moment().hour(hour)   
    if(scheduledHour.isSame(now, 'hour')){
        return 'present'
    }
    else if(scheduledHour.isAfter(now)){
        return 'future'
    }
    else if(scheduledHour.isBefore(now)){
        return 'past'
    }
}

$("#t9").val(localStorage.getItem("task9")).addClass(getClass(9));
$("#t10").val(localStorage.getItem("task10")).addClass(getClass(10));
$("#t11").val(localStorage.getItem("task11")).addClass(getClass(11));
$("#t12").val(localStorage.getItem("task12")).addClass(getClass(12));
$("#t1").val(localStorage.getItem("task1")).addClass(getClass(13));
$("#t2").val(localStorage.getItem("task2")).addClass(getClass(14));
$("#t3").val(localStorage.getItem("task3")).addClass(getClass(15));
$("#t4").val(localStorage.getItem("task4")).addClass(getClass(16));
$("#t5").val(localStorage.getItem("task5")).addClass(getClass(17));



$("#save9").on("click",
    function () 
    {
        var t9 = $("#t9").val();
        localStorage.setItem("task9", t9);
    })
        $("#save10").on("click",
            function () {
                var t10 = $("#t10").val();
                localStorage.setItem("task11", t10);
            })
                $("#save11").on("click",
                    function () {
                        var t11 = $("#t11").val();
                        localStorage.setItem("task11", t11);
                    })

                        $("#save12").on("click",
                            function () {
                                var t12 = $("#t12").val();
                                localStorage.setItem("task12", t12);

                            })

                                $("#save1").on("click",
                                    function () {
                                        var t1 = $("#t1").val();
                                        localStorage.setItem("task1", t1);
                                    })

                                        $("#save2").on("click",
                                            function () {
                                                var t2 = $("#t2").val();
                                                localStorage.setItem("task9", t2);
                                            })

                                                $("#save3").on("click",
                                                    function () {
                                                        var t3 = $("#t3").val();
                                                        localStorage.setItem("task9", t3);
                                                    })

                                                        $("#save4").on("click",
                                                            function () {
                                                                var t4 = $("#t4").val();
                                                                localStorage.setItem("task9", t4);
                                                            })

                                                                $("#save5").on("click",
                                                                    function () {
                                                                        var t5 = $("#t5").val();
                                                                        localStorage.setItem("task9", t5);

                                                                    })
                                                                