/**
 * HomeController for home module
 */
'use strict'

export default class HomeController {
  constructor(searchQueryService ,$state) {
    this.name = "somil"
    this.searchQueryService = searchQueryService;
    this.$state = $state;
  }


  searchQuery() {
    var results = this.searchQueryService.getSearchResults();
    console.log('search results = ' + results);
    this.$state.go('renting',{queryResult:results});
  }

}