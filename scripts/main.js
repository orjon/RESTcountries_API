$(() => {

  console.log('RESTCountries API')

  // const buttonAction = function(e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   $('#id').text('text')
  //}

  const $countries = $('.countries')
  var countries = []
  var worstCase= []

  function getSpecificCountries(filter='all') {
    console.log('getting specific countries')
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${filter}`
    })
      .then(response => {
        countries = response
        console.log(countries)
        displayCountries()
        console.log(countries[0])
      })
  }

  console.log(countries[0])

  function displayCountries() {
    $countries.empty()
    countries.forEach(country => {
      $countries.append(`
        <div class='card country'>
          <div class='details'>
            <h3 class='country-row'>${country.name}</h3>
            <h4 class='country-row'>${country.nativeName}</h4>
            <img class='country-row' src=${country.flag} alt="Flag of ${country.name}" />
          </div>
        </div>
      `)
    })
  }

  getSpecificCountries()

  function findLongest(array) {
    array.forEach(item => {

    })
  }



    //
    // const arrayItemLengths = function(e) {
    //   e.preventDefault()
    //   e.stopPropagation()
    //   var arrayItemLengthsArray = $('#arrayItemLengthsArray').val().split(',')
    //   var arrayItemLengthsResult = arrayItemLengthsArray.map(item => item.length)
    //   $('#arrayItemLengthsResult').text('['+arrayItemLengthsResult+']')
    // }


})
