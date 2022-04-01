$(document).ready(function() {
    var souls = 0;
    var soulPrice = 1;
    var knowledge = 0;
    var soulPlus = 1;
    var money = 0;
    var knowledgePlus = 1;
    var autoLogPLus = 0;
    var hitmanPrice = 100;
    var logPrice = 1;
    var menu = switchMenu("main");

    $("#homicide").click(function() {
        souls += soulPlus;
        changeInventory();
        changeMarket();
    });

    $("#read").click(function() {
        knowledge += knowledgePlus;
        changeInventory();
        //changeMarket();
    });

    $("#toLibrary").click(function() {
        menu = switchMenu("library");
    });

    $("#toAltar").click(function() {
        menu = switchMenu("altar");
        changeMarket();
    });

    $(".toMain").click(function() {
        menu = switchMenu("main");
    });

    $("#sacrifice1").click(function() {
        souls --;
        money += soulPrice;
        changeInventory();
        changeMarket();
    });

    $("#sacrifice10").click(function() {
        souls -= 10;
        money += soulPrice * 10;
        changeInventory();
        changeMarket();
    });

    $("#sacrificeAll").click(function() {
        money += soulPrice * souls;
        souls = 0;
        changeInventory();
        changeMarket();
    });

    function changeInventory() {
        $("#knowledge").html("You now have " + knowledge + " IQ.");

        if (souls == 1) {
            $("#souls").html("You now have " + souls + " soul.");
        } else {
            $("#souls").html("You now have " + souls + " souls.");
        }

        $("#money").html("You now have $" + money + ".");
    }

    function changeMarket() {
        
        if (souls > 0) {
            $("#sacrificeAll").css("display", "block");
        } else {
            $("#sacrificeAll").css("display", "none");
        }

        if (souls >= 1) {
            $("#sacrifice1").css("display", "block");
        } else {
            $("#sacrifice1").css("display", "none");
        }

        if (souls >= 10) {
            $("#sacrifice10").css("display", "block");
        } else {
            $("#sacrifice10").css("display", "none");
        }

    }

    function switchMenu(menu) {
        $(".menu").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});