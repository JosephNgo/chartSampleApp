var getData = $.ajax({
  url: "https://api.fda.gov/food/enforcement.json?&count=report_date"
  // url: "foodRecall.js"
}).done(function(data) {
  var results = data.results;
  var resultLength = results.length;
  var rArray = [];

  for (var i =0; i < resultLength; i++){
    rArray.push({
      count: results[i].count,
      time: results[i].time
    });
  }
  // console.log(rArray);
  return data;
});

