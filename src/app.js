$(document).ready(function () {
    var money = 0;
    var moneyPlus = 1;
    var moneyMul = 1;
    var knowledge = 0;
    var knowledgePlus = 1;
    var knowledgeMul = 1;

    var LibraryPassGen = 1;
    var LibrarianGen = 4;
    var LibraryGen = 8;
    var PublicOfficeGen = 16;
    var CableCompanyGen = 25;
    var CongrssionalSeatGen = 36;
    var PublishingCompanyGen = 49;

    var numLibraryPass = 0;
    var numLibrarian = 0;
    var numLibrary = 0;
    var numPublicOffice = 0;
    var numCableCompany = 0;
    var numCongrssionalSeat = 0;
    var numPublishingCompany = 0;

    var libraryPassPrice = 1;
    var librarianPrice = 1;
    var libraryPrice = 1;
    var PublicOfficePrice = 1;
    var CableCompanyPrice = 1;
    var CongrssionalSeatPrice = 1;
    var PublishingCompanyPrice = 1;

    var LibraryPassMul = 1;
    var LibrarianMul = 1;
    var LibraryMul = 1;
    var PublicOfficeMul = 1;
    var CableCompanyMul = 1;
    var CongrssionalSeatMul = 1;
    var PublishingCompanyMul = 1;

    var spoffify = false;

    var menu = switchMenu("main");

    updateMarket();

    setInterval(function(){
        //update all generation in both studio and main area
        
        updateMarket();
    }, 1000);

    $("#read").click(function() {
        //update knowledge by value times multiplier
        knowledge += knowledgePlus * knowledgeMul;
        updateMarket();
    });

    $("#promoteMusic").click(function() {
        //update money by value times multiplier
        money += moneyPlus * moneyMul;
        updateMarket();
    });
    
    $("#libraryPass").click(function () {
        money -= libraryPassPrice;
        numLibraryPass++;
        updateMarket();
    });

    $("#librarian").click(function(){
        money -= librarianPrice;
        numLibraryPass++;
        updateMarket();
    });

    $("#library").click(function(){
        money -= libraryPrice;
        numLibrary++;
        updateMarket();
    });

    $("#publicOffice").click(function(){
        money -= PublicOfficePrice;
        numPublicOffice++;
        updateMarket();
    });

    $("#cableCompany").click(function(){
        money -= CableCompanyPrice;
        numCableCompany++;
        updateMarket();
    });

    $("#congressionalSeat").click(function(){
        money -= CongrssionalSeatPrice;
        numCongrssionalSeat++;
        updateMarket();
    });

    $("#publishingCompany").click(function(){
        money -= PublishingCompanyPrice;
        numPublishingCompany++;
        updateMarket();
    });

    function updateMarket() {
        changeInventory();
        updateButtonStatus();
    }

    // function updatePrices() {

    // }

    function changeInventory() {
        $("#knowledge").html("You now have " + knowledge + " IQ.");
        $("#money").html("You now have $" + money + ".");
    }

    function updateButtonStatus() {

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

        if (money >= PublicOfficePrice) {
            $("#publicOffice").removeClass('disabled');
        } else {
            $("#publicOffice").addClass('disabled');
        }

        if (money >= CableCompanyPrice) {
            $("#cableCompany").removeClass('disabled');
        } else {
            $("#cableCompany").addClass('disabled');
        }

        if (money >= CongrssionalSeatPrice) {
            $("#congressionalSeat").removeClass('disabled');
        } else {
            $("#congressionalSeat").addClass('disabled');
        }

        if (money >= PublishingCompanyPrice) {
            $("#publishingCompany").removeClass('disabled');
        } else {
            $("#publishingCompany").addClass('disabled');
        }
    }

    $("#toStudio").click(function () {
        menu = switchMenu("studio");
    });

    $("#toMain").click(function () {
        menu = switchMenu("main");
    });

    function switchMenu(menu) {
        $(".menu").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});