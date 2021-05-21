const catalogo = []

// DOM 
listaFilme = (film, img, index) => {
    
    const html = document.querySelector('#card-films')

    html.innerHTML += `<div class="card">
                            <div class="card-top">
                                <span>${film}</span>
                                <img class="button delete" onclick="remove(${index})" src="./assets/minus.svg" alt="Remover transação">
                            </div>
                            <img class="image" src="${img}" alt="">
                        </div>`
}

//Remove cards
remove = (index) => {
    catalogo.splice(index, 1)
    
    const html = document.querySelector('#card-films')
    html.innerHTML = ""

    catalogo.forEach((value, index) => {
        listaFilme(value.film, value.img, index)
    })
} 

// Init
save = () => {

    const film = document.getElementById('film-input')
    const img = document.getElementById('img-input')
    const limpa = document.querySelector('#card-films')

    if(film.value != "" && 
       img.value.endsWith('.jpg') || 
       img.value.endsWith('.png')){
          
        catalogo.push({film: film.value, img: img.value})

        film.value = ""
        img.value = ""

    } else if (film.value == ""){
        alert('Insira o nome do filme!')
    } else if(img.value == ""){
        alert('Insira o endereço da imagem da capa do filme!')
    }else {
        alert('A imagem da capa do filme tem que ser do tipo ".jpg" ou ".png"')
    }

    limpa.innerHTML = ""

    catalogo.forEach((value, index) => {
        listaFilme(value.film, value.img, index)
    })
}
