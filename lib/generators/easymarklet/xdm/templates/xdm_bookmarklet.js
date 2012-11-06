(function(){
  
  var <%= name.titleize %>Bookmarklet = {

    visible : true,
    consumer : {
      css : [], // could be an array or a string
      methods : { // The methods that the producer can call
      
      }
    },
    producer : {
      path : "/<%= name %>_producer", // The path on your app that provides your data service
      methods : { // The methods that the consumer can call
      
      }
    }
  }
  
  window.<%= name.titleize %>Bookmarklet = <%= name.titleize %>Bookmarklet;

})();
