$(() => {

  console.log('RESTCountries API')

  // const buttonAction = function(e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   $('#id').text('text')
  //}

  const $countries = $('.countries')
  var countries

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
      })
  }

  function displayCountries() {
    $countries.empty()
    countries.forEach(country => {
      $countries.append(`
        <div class='country'>
        <h3>${country.name}</h3>
        <h4>${country.nativeName}</h4>
        <img src=${country.flag} alt="Flag of ${country.name}" />
        </div>
      `)
    })
  }

  getSpecificCountries()



})
