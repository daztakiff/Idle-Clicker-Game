$(document).ready(function () {
    var money = 0;
    var moneyPlus = 1;
    var moneyMul = 1;
    var knowledge = 0;
    var knowledgePlus = 1;
    var knowledgeMul = 1;

    var LibraryPassGen = 1;
    var LibrarianGen = 60;
    var LibraryGen = 520;
    var PublicOfficeGen = 4320;
    var CableCompanyGen = 51840;
    var CongrssionalSeatGen = 622080;
    var PublishingCompanyGen = 74646960;

    var numLibraryPass = 0;
    var numLibrarian = 0;
    var numLibrary = 0;
    var numPublicOffice = 0;
    var numCableCompany = 0;
    var numCongrssionalSeat = 0;
    var numPublishingCompany = 0;

    var libraryPassPrice = 5;
    var librarianPrice = 60;
    var libraryPrice = 720;
    var publicOfficePrice = 8640;
    var cableCompanyPrice = 103680;
    var congrssionalSeatPrice = 1244160;
    var publishingCompanyPrice = 14929220;

    var LibraryPassMul = 1;
    var LibrarianMul = 1;
    var LibraryMul = 1;
    var PublicOfficeMul = 1;
    var CableCompanyMul = 1;
    var CongrssionalSeatMul = 1;
    var PublishingCompanyMul = 1;

    var singleGen = 1;
    var albumGen = 60;
    var tracksAIGen = 520;
    var concertGen = 4320;
    var beefWithCelebGen = 51840;
    var boxCelebPayToViewGen = 622080;
    var headlineMusicFestivalGen = 74646960;
    var eraDefiningTrackGen = 89579520

    var numSingles = 0;
    var numAlbums = 0;
    var numTracksAI = 0;
    var numConcerts = 0;
    var numBeefWithCeleb = 0;
    var numBoxCelebPayPerView = 0;
    var numMusicFestivals = 0;
    var numEraDefiningTracks = 0;

    var singlePrice = 5;
    var albumPrice = 60;
    var tracksAIPrice = 720;
    var concertPrice = 8640;
    var beefCelebPrice = 103680;
    var boxCelebPayToViewPrice = 1244160;
    var musicFestivalPrice = 14929220;
    var eraDefiningTrackPrice = 179159040;

    var singleMul = 1;
    var albumMul = 1;
    var tracksAIMul = 1;
    var concertMul = 1;
    var beefCelebMul = 1;
    var boxCelebPayToViewMul = 1;
    var musicFestivalMul = 1;
    var eraDefiningTrackMul = 1;

    var spoffify = false;
    var spoffifyPrice = 20;

    var menu = switchMenu("main");

    updateMarket();
    loadSaveState();

    setInterval(function(){
        //update all generation in both studio and main area
        
        knowledge += (numLibraryPass * LibraryPassGen) + (numLibrarian * LibrarianGen) + 
                    (numLibrary * LibraryGen) + (numPublicOffice * PublicOfficeGen) + 
                    (numCableCompany * CableCompanyGen) + (numCongrssionalSeat * CongrssionalSeatGen) +
                    (numPublishingCompany * PublishingCompanyGen);

        money += (numSingles * singleGen) + (numAlbums * albumGen) + 
        (numTracksAI * tracksAIGen)+ (numConcerts * concertGen) + 
        (numBeefWithCeleb * beefWithCelebGen) + (numBoxCelebPayPerView * boxCelebPayToViewGen) +
        (numMusicFestivals * headlineMusicFestivalGen) + (numEraDefiningTracks * eraDefiningTrackGen);
        updateMarket();
    }, 1000);

    setInterval(function(){

        const saveState = {
        
            buildingsKnowledge: [numLibraryPass, numLibrarian, numLibrary, numPublicOffice, numCableCompany, numCongrssionalSeat, numPublishingCompany],
            buildingsMoney: [numSingles, numAlbums, numTracksAI, numConcerts, numBeefWithCeleb, numBoxCelebPayPerView, numMusicFestivals, numEraDefiningTracks],
            hasSpofiffy: spoffify,
            inventory: [money, knowledge]
        };
    
        const saveStateString = JSON.stringify(saveState);
        localStorage.setItem('saveState', saveStateString);

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

    $("#buySpoffify").click(function(){
        money -= spoffifyPrice;
        spoffify = true;
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
        money -= publicOfficePrice;
        numPublicOffice++;
        updateMarket();
    });

    $("#cableCompany").click(function(){
        money -= cableCompanyPrice;
        numCableCompany++;
        updateMarket();
    });

    $("#congressionalSeat").click(function(){
        money -= congrssionalSeatPrice;
        numCongrssionalSeat++;
        updateMarket();
    });

    $("#publishingCompany").click(function(){
        money -= publishingCompanyPrice;
        numPublishingCompany++;
        updateMarket();
    });

    $("#produceSingle").click(function () {
        knowledge -= singlePrice;
        numSingles++;
        updateMarket();
    });

    $("#produceAlbum").click(function () {
        knowledge -= albumPrice;
        numAlbums++;
        updateMarket();
    });

    $("#AITracks").click(function(){
        knowledge -= tracksAIPrice;
        numTracksAI++;
        updateMarket();
    });

    $("#hostConcert").click(function(){
        knowledge -= concertPrice;
        numConcerts++;
        updateMarket();
    });

    $("#beefCelebrity").click(function(){
        knowledge -= beefCelebPrice;
        numBeefWithCeleb++;
        updateMarket();
    });

    $("#box").click(function(){
        knowledge -= boxCelebPayToViewPrice;
        numBoxCelebPayPerView++;
        updateMarket();
    });

    $("#headlineFestival").click(function(){
        knowledge -= musicFestivalPrice;
        numMusicFestivals++;
        updateMarket();
    });

    $("#EraDefiningTrack").click(function(){
        knowledge -= eraDefiningTrackPrice;
        numEraDefiningTracks++;
        updateMarket();
    });

    function updateMarket() {
        changeInventory();
        updateButtonStatus();
    }

    function changeInventory() {
        $("#knowledge").html("You now have " + knowledge + " IQ.");
        $("#money").html("You now have $" + money + ".");
    }

    function updateButtonStatus() {

        if (money >= spoffifyPrice && !spoffify) {
            $("#buySpoffify").removeClass('disabled');
        } else {
            $("#buySpoffify").addClass('disabled');
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

        if (money >= publicOfficePrice) {
            $("#publicOffice").removeClass('disabled');
        } else {
            $("#publicOffice").addClass('disabled');
        }

        if (money >= cableCompanyPrice) {
            $("#cableCompany").removeClass('disabled');
        } else {
            $("#cableCompany").addClass('disabled');
        }

        if (money >= congrssionalSeatPrice) {
            $("#congressionalSeat").removeClass('disabled');
        } else {
            $("#congressionalSeat").addClass('disabled');
        }

        if (money >= publishingCompanyPrice) {
            $("#publishingCompany").removeClass('disabled');
        } else {
            $("#publishingCompany").addClass('disabled');
        }

        if (knowledge >= singlePrice && spoffify) {
            $("#produceSingle").removeClass('disabled');
        } else {
            $("#produceSingle").addClass('disabled');
        }

        if (knowledge >= albumPrice && spoffify) {
            $("#produceAlbum").removeClass('disabled');
        } else {
            $("#produceAlbum").addClass('disabled');
        }

        if (knowledge >= tracksAIPrice && spoffify) {
            $("#AITracks").removeClass('disabled');
        } else {
            $("#AITracks").addClass('disabled');
        }

        if (knowledge >= concertPrice && spoffify) {
            $("#hostConcert").removeClass('disabled');
        } else {
            $("#hostConcert").addClass('disabled');
        }

        if (knowledge >= beefCelebPrice && spoffify) {
            $("#beefCelebrity").removeClass('disabled');
        } else {
            $("#beefCelebrity").addClass('disabled');
        }

        if (knowledge >= boxCelebPayToViewPrice && spoffify) {
            $("#box").removeClass('disabled');
        } else {
            $("#box").addClass('disabled');
        }

        if (knowledge >= musicFestivalPrice && spoffify) {
            $("#headlineFestival").removeClass('disabled');
        } else {
            $("#headlineFestival").addClass('disabled');
        }

        if (knowledge >= eraDefiningTrackPrice && spoffify) {
            $("#EraDefiningTrack").removeClass('disabled');
        } else {
            $("#EraDefiningTrack").addClass('disabled');
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

    function loadSaveState(){
    
        if (localStorage.getItem('saveState') === null) {
            const loadSaveStateString = localStorage.getItem('saveState');
            const loadSaveState = JSON.parse(loadSaveStateString);

            spoffify = loadSaveState.hasSpofiffy;
            money = loadSaveState.inventory.money
            knowledge = loadSaveState.inventory.knowledge
            
            numLibraryPass = loadSaveState.buildingsKnowledge.numLibraryPass
            numLibrarian = loadSaveState.buildingsKnowledge.numLibrarian
            numLibrary = loadSaveState.buildingsKnowledge.numLibrary
            numPublicOffice = loadSaveState.buildingsKnowledge.numPublicOffice
            numCableCompany = loadSaveState.buildingsKnowledge.numCableCompany
            numCongrssionalSeat = loadSaveState.buildingsKnowledge.numCongrssionalSeat
            numPublishingCompany = loadSaveState.buildingsKnowledge.numPublishingCompany

            numSingles = loadSaveState.buildingsMoney.numSingles
            numAlbums = loadSaveState.buildingsMoney.numAlbums
            numTracksAI = loadSaveState.buildingsMoney.numTracksAI
            numConcerts = loadSaveState.buildingsMoney.numConcerts
            numBeefWithCeleb = loadSaveState.buildingsMoney.numBeefWithCeleb
            numBoxCelebPayPerView = loadSaveState.buildingsMoney.numBoxCelebPayPerView
            numMusicFestivals = loadSaveState.buildingsMoney.numMusicFestivals
            numEraDefiningTracks = loadSaveState.buildingsMoney.numEraDefiningTracks
        }
    
    };
});