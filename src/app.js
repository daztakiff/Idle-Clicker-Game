

$(document).ready(function () {
    var souls = 0;
    var soulPrice = 1;
    var soulPlusLibraryPass = 1;
    var soulPlusLibrarian = 2;
    var soulPlusLibrary = 4;
    var numLibraryPass = 0;
    var numLibrarian = 0;
    var numLibrary = 0;
    var libraryPassPrice = 50;
    var librarianPrice = 100;
    var libraryPrice = 200;
    var spoffify = false;
    var knowledge = 0;
    var knowledgePlus = 1;
    var money = 0;
    var menu = switchMenu("main");

    updateMarket();

    setInterval(function(){
        souls += soulPlusLibraryPass * numLibraryPass;
        souls += soulPlusLibrarian * numLibrarian;
        souls += soulPlusLibrary * numLibrary;
        updateMarket();
    }, 1000);

    $("#homicide").click(function() {
        souls++;
        updateMarket();
    });
    
    $("#libraryPass").click(function () {
        money -= libraryPassPrice;
        numLibraryPass++;
        updateMarket();
    });

    $("#librarian").click(function(){
        money -= librarianPrice;
        numLibrarian++;
        updateMarket();
    });

    $("#library").click(function(){
        money -= libraryPrice;
        numLibrary++;
        updateMarket();
    });

    $("#sell1").click(function () {
        souls--;
        money += soulPrice;
        updateMarket();
    });

    $("#sell10").click(function () {
        souls -= 10;
        money += soulPrice * 10;
        updateMarket();
    });

    $("#sellAll").click(function () {
        money += soulPrice * souls;
        souls = 0;
        updateMarket();
    });

    $("#buyAccount").click(function () {
        money -= 50;
        spoffify = true;
        
        updateMarket();
    });

    $("#produceMusic").click(function () {
        knowledge += knowledgePlus;
        updateMarket();
    });

    function updateMarket() {
        changeInventory();
        changeEcon();
        changeSpoffify();
    }

    function changeInventory() {
        $("#knowledge").html("You now have " + knowledge + " IQ.");

        if (souls == 1) {
            $("#souls").html("You now have " + souls + " soul.");
        } else {
            $("#souls").html("You now have " + souls + " souls.");
        }

        $("#money").html("You now have $" + money + ".");
    }

    function changeEcon() {

        if (souls > 0) {
            $("#sellAll").removeClass('disabled');
        } else {
            $("#sellAll").addClass('disabled');
        }

        if (souls >= 1) {
            $("#sell1").removeClass('disabled');
        } else {
            $("#sell1").addClass('disabled');
        }

        if (souls >= 10) {
            $("#sell10").removeClass('disabled');
        } else {
            $("#sell10").addClass('disabled');
        }

        if (money >= libraryPassPrice) {
            $("#libraryPass").removeClass('disabled');
        } else {
            $("#libraryPass").addClass('disabled');
        }

        if (money >= librarianPrice) {
            $("#librarian").removeClass('disabled');
        } else {
            $("#librarian").addClass('disabled');
        }

        if (money >= libraryPrice) {
            $("#library").removeClass('disabled');
        } else {
            $("#library").addClass('disabled');
        }

    }

    function changeSpoffify() {

        if (money >= 50 && !spoffify) {
            $("#buyAccount").css("display", "block");
        } else {
            $("#buyAccount").css("display", "none");
        }

        if (spoffify) {
            $("#produceMusic").css("display", "block");
            $("#createSingle").css("display", "block");
            $("#createAlbum").css("display", "block");
            $("#buyKeyboard").css("display", "block");
            $("#buySoftware").css("display", "block");
            $("#buyScript").css("display", "block");
        } else {
            $("#produceMusic").css("display", "none");
            $("#createSingle").css("display", "none");
            $("#createAlbum").css("display", "none");
            $("#buyKeyboard").css("display", "none");
            $("#buySoftware").css("display", "none");
            $("#buyScript").css("display", "none");
        }

    }

    $("#toStudio").click(function () {
        menu = switchMenu("studio");
    });

    $(".toMain").click(function () {
        menu = switchMenu("main");
    });

    function switchMenu(menu) {
        $(".menu").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});