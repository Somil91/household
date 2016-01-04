/**
 * RentingController for Renting module
 */
'use strict'

export default class RentingController {
    constructor($stateParams) {
        //var renting = this;

        $(function() {
            $('.slider').slider({
                full_width: true
            });
            $('ul.tabs').tabs();
            $(".button-collapse_1").sideNav();

        });

        $('.button-collapse').sideNav('hide');
        $("#relatedRentItems").owlCarousel();

        this.searchQuery = "Search here";
        this.searchResults = [];

        this.searchResults = $stateParams.queryResult;
        console.log("received results =" +renting.results);

        //for (var i = 0; i < this.searchResults.length; i++)
        //    this.searItems.push(i);

        //for (var i = 0; i < 6; i++)
        //    renting.HouseItems.push(i);
        //
        //for (var i = 0; i < 10; i++)
        //    renting.Reviews.push(i);




    }
}
