// from data.js 
var tableData = data;

// YOUR CODE HERE!

// get tbody refernce  
tbody = d3.select('tbody')


// use Object.entries to get the data and loop through then insert to html table

function displayData(data) {
    tbody.text('')
    data.forEach(function (sighting) {
        newRow = tbody.append('tr')
        Object.entries(sighting).forEach(function ([key, value]) {
            newTd = newRow.append('td').text(value)
        })
    })
}

displayData(tableData)

//select user input and search button
var dateForm = d3.select('#datetime')
var button = d3.select('filter-btn')


// search data with date inputs
function clickSelect() {
    //don't refresh the page! 
    d3.event.preventDefault()
    //print the value that was input 
    console.log(dateForm.property('value'))
    //create a new table with the filterd data only    
     var newTable = tableData.filter(sighting => sighting.datetime === dateForm.property('value')) 

    displayData(newTable)
}

// event handler
dateForm.on('change', clickSelect) 
