function bottlesOfBeer() {
    var beers = 99;

    while (beers > 0) {
        var beerLeft = beers - 1;
        console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer. Take 1 down, pass it around, " + beerLeft + " bottles of beer on the wall.");
        beers--;
    }

    console.log("No more bottles on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
    
}