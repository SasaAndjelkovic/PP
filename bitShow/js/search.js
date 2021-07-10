const url = "http://api.tvmaze.com/search/shows?q=";
const input = $('input');
const cardHolder = $('.cardHolder');
const blank = $('.noResult')

const search = ((inputValue) => {
    $.ajax({
        url:`${url}${inputValue}`,
        method: 'GET',
    }).done((response) => {
        cardHolder.html("");
        response.forEach((item) => {
            let card = $(`<div class="card" style="width: 18rem;" onclick='gotToShow(${item.show.id})'>
            <img src='${item.show.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.show.name}</h5>
            </div>
          </div>`);
          cardHolder.append(card);
        })
    }).fail(() => {
        alert('Network error')
    })
})

const searchHandler = (event) => {
    if (event.keyCode == 13) {
        let inputValue = input.val()
        input.blur();
        if (!inputValue) {
            alert('Input required');
        }
    search(inputValue)
    } 
}

const gotToShow = (id) => {
    localStorage.setItem('id', id);
    location.assign('show_info.html');
}

input.on('keydown', searchHandler)

input.keyup(() => {
    const enteredText = input.val()

    $.ajax({
        url: `${url}${enteredText}`,
        method: "GET",
    }).done((gotResult) => {
        $('#searchlist').text('');
        for (let i=0; i <= 10; i++) {
            if (gotResult[i] !== undefined) {
                let searchlistItem = $(`<li onclick='gotToShow(${gotResult[i].show.id})'>${gotResult[i].show.name}</li>`)
                $('#searchList').append(searchlistItem);
            }
        }
    })
})