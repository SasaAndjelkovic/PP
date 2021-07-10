const stock = localStorage.getItem('id');
const aja = "http://api.tvmaze.com/shows/"

$(document).ready (() => {
    showMovieInfo();
    showSeasons(stock);
    showCast(stock);
})

const showMovieInfo = () => 
    $.ajax({
        url:`${aja}${stock}`,
        method: "GET",
    }).done((response) => {
        let card = `<h1 class="mb-5 mt-5 text-center">${response.name}</h1>
          <div class="card mb-3 border-0" style="max-width: 1000px;">
            <div class="row ">
            <div class="col-8">
            <img src="${response.image.original}" class="img-fluid " alt="...">
            </div>
            <div class="col-4">
             <div class="card-body">
             <ul class='seasons'></ul>
             <ul class='cast'></ul>
           </div>
           </div>
           </div>
          </div>
          ${response.summary}`;
          cardHolder.append(card);
    }).fail(() => {
        alert('Network error');
    })
 
    const showSeasons = (id) => {
        $.ajax({
            url:`${aja}${id}/seasons`,
            method: "GET",
        }).done((response) => {
            let numberOfSeasons = `<h2> Seasons(${response.length})</h2>`
            $('.card-body').prepend(numberOfSeasons);
            response.forEach((element) => {
              let seasons = `
                      <li>${element.premiereDate} - ${element.endDate}</li>
                      
                      `;
        $('.seasons').append(seasons)
        })
    })
  }

  const showCast = (id) => {
    $.ajax({
      url: `${aja}${id}/cast`,
    }).done((response) => {
      let listOfCast = `<h2>Cast</h2>`
      $('.seasons').after(listOfCast);
      response.forEach((element) => {
        let castMembers = `
                <li>${element.person.name}</li>
                
                `;
        $(".cast").append(castMembers);
      });
    });
  };
