$.ajax({
  url: "https://api.fda.gov/food/enforcement.json?&count=report_date"
}).done(function(data) {
  console.log(data);
  return data;
});

console.log("hello");