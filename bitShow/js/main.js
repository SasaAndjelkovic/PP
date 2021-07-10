const aja = "http://api.tvmaze.com/shows"

$(document).ready(() => {
    shows();
})

const shows = (() => {
    console.log('Message')
    $.ajax({ 
        url: aja, 
        method: 'GET',
    }).done((response) => {
        //console.log(response)
        response.sort((a,b) => {
            return b.rating.average - a.rating.average
        })
        let firstTopMovies = response.slice(0,50)
        //console.log(firstTopMovies)
        firstTopMovies.forEach((item) => {
            let card = $(`<div class="card" style="width: 18rem;" onclick='gotToShow(${item.id})'>
            <img src='${item.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
          </div>`);
        cardHolder.append(card)
        })
    }).fail(() => {
        alert('Network error')
    })
})