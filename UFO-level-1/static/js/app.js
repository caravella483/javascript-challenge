// from data.js
var tableData = data;

//
var tableData = data;
var tbody = d3.select("tbody");



function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the new input values from the form
    var inputValue = d3.select("#datetime").property("value");
  
    // clear the table to prepare for new data filter
    tbody.html("")

    // if there is a value being searched:
    if (inputValue){
    // filter the data based on the search
        var filteredData = tableData.filter(data => data.datetime === inputValue)

    // append html table with each listing
        filteredData.forEach((ufoSighting) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }

    // if there isn't a value being searched, list all known values:
    else {
        var filteredData = tableData.filter(data => data.datetime)
        filteredData.forEach((ufoSighting) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    };

  // clear search input
  d3.select(".form-control").node().value = "";
};
    


d3.select("#filter-btn").on("click", handleSubmit);
d3.select("form").on("submit", handleSubmit);

