// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var inputElement = d3.select("#datetime");
var selectSearcher = 'datetime'


function tabler (city) {
    //console.log(city);
    var row = tbody.append("tr");
    Object.values(city).forEach(function(val) {
        //console.log(val);
        var cell = row.append('td');
        return cell.text(val);
    });
}

data.forEach(tabler);

var button1 = d3.select('#filter-btn');
var button2 = d3.select('#reset-btn');

button1.on("click", function() {
    tbody.html('');
    var inputValue = inputElement.property('value');
    var filteredData = data.filter(date => date[`${selectSearcher}`] == inputValue);
    filteredData.forEach(tabler);
});

button2.on("click", function() {
    tbody.html('');
    data.forEach(tabler);
});

var selectElement = document.querySelector('#drop_filter');

selectElement.addEventListener('change', (event) => {
    d3.select('#dynamic-label').text(`Enter a ${event.target.value}`);
    selectSearcher = event.target.value;
  });