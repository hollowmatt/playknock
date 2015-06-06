(function() {
  /***
   * Setup our variables:
   * - jsonData -> this will contain all of the info form our JSON object
   ***/
  var jsonData = getMapData();

  //Our Knockout.js model
  function filterModel() {
    var self = this;
    self.content = jsonData.cities[0].places;
  }

  /***
   * Do the good stuff here
   *  //1: Setup the KnockoutJS model for the lists
   *  //2: Call our initialize function
   ***/
  ko.applyBindings(new filterModel());
})();