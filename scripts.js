
var date = moment();
document.getElementById("date").innerHTML = date.format("MMMM DD, YYYY h:MM");
console.log(date);


$("#t9").val(localStorage.getItem("task9"));
$("#t10").val(localStorage.getItem("task10"));
$("#t11").val(localStorage.getItem("task11"));
$("#t12").val(localStorage.getItem("task12"));
$("#t1").val(localStorage.getItem("task1"));
$("#t2").val(localStorage.getItem("task2"));
$("#t3").val(localStorage.getItem("task3"));
$("#t4").val(localStorage.getItem("task4"));
$("#t5").val(localStorage.getItem("task5"));


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
                                                                