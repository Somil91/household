/**
 * SearchQueryService
 */

const angular = require('angular');

class SearchQueryService {
  constructor() {
    this.names = ['John', 'Mark', 'Annie'];
  }

  getSearchResults() {
    //call api to get the results
    var results = [{
      product:{
        price:100,
        description:"aaaa",
        title:"Product me"
      }
    }];
    return results ;
  }
}
export default SearchQueryService;

