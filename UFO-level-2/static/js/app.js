// from data.js
var tableData = data

//get a reference on the table body
var tbody = d3.select('tbody')

//Automatic/Defaut table of UFO sightings from level 1
data.forEach(function (sighting) {
    newRow = tbody.append('tr')
    Object.entries(sighting).forEach(function ([key, value]) {
        newTd = newRow.append('td').text(value)
    })
})
 
 
//Level 2: Multiple Search Categories (Optional)

//get a reference on the filter table button click 
var filterButton = d3.select('#filter-btn')
//define d3 on click event handler function    
filterButton.on('click', function () {
    //to clear table on new click 
    tbody.html('')
    
    //filter options 
    var Date = d3.select('#select-date').property('value')
    var City = d3.select('#select-city').property('value')    
    var State = d3.select('#select-state').property('value')    
    var Country = d3.select('#select-country').property('value')    
    var Shape = d3.select('#select-shape').property('value')
   

    // filters decleration
    if (Date) {searchResults = tableData.filter(search => search.datetime === Date)}
    else if  (City) {searchResults = tableData.filter(search => search.city === City)}
    else if  (State) {searchResults = tableData.filter(search => search.state === State)}
    else if  (Country) {searchResults = tableData.filter(search => search.country === Country)}
    else if  (Shape) {searchResults = tableData.filter(search => search.shape === Shape)}
   
    //extract mataching rows for the ed search option 
    searchResults.forEach((MSC) => {
        var row = tbody.append('tr')
        Object.entries(MSC).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })
   
})



