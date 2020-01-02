// load data from data.js into variable
var tableData = data;

// get table body reference
var tbody = d3.select("tbody");

function buildTable(data) {
  // Initialize or make sure the table is empty
  tbody.html("");

  // Iterate through each object in data and 
  // append the table appropriately
  
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Add data to each table cell (td) in the row
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Get the date from the mouse click
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter the date information given
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // Display all data if no date was given
  buildTable(filteredData);
}

// Event for mouseclick
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table 
buildTable(tableData);