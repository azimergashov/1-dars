'use strick';

const elResult = document.querySelector(".search__result")
const elList = document.querySelector(".movie__list")
const elForm = document.querySelector('.form')
const elSelect = document.querySelector(".form__select")


elResult.textContent = films.length

const genresSelect = function(arr){

const totalGenres = []

    arr.forEach((f) =>{
        f.genres.forEach((gen) =>{
            if(!totalGenres.includes(gen)){
            totalGenres.push(gen)
           }
        })
    })

    totalGenres.forEach((genrs) =>{
        const elOption = document.createElement("option")

        elOption.textContent = genrs

        elSelect.appendChild(elOption)
    })
}




const nmadur = function(arr, htmlElement){

arr.forEach((movie) => {
    //create
    const newLi = document.createElement("li")
    const newImg = document.createElement("img")
    const newDiv = document.createElement("div")
    const newHeading = document.createElement("h2")
    const newUl = document.createElement("ul")
    const newP = document.createElement("p")
    const newA = document.createElement("a")


    //gener

    movie.genres.forEach((genr) =>{
        const generLI = document.createElement("li")

        generLI.textContent = genr;

        newUl.appendChild(generLI)
    })

    //setatribute
    newLi.setAttribute("class", "card mb-3")
    newLi.style.width = "15rem";
    newImg.classList.add("card-img-top")
    newImg.setAttribute("src", movie.poster)
    newDiv.classList.add("card-body")
    newHeading.classList.add("card-title")
    newUl.setAttribute("class", "list-unstyled  text-success")
    newP.classList.add("card-text")
    newA.setAttribute("class", "btn btn-info ")


    newHeading.textContent = movie.title
    // newP.textContent = movie.overview
    newA.textContent = "watch trailer"


    //append
    htmlElement.appendChild(newLi)
    newLi.appendChild(newImg)
    newLi.appendChild(newDiv)
    newDiv.appendChild(newHeading)
    newDiv.appendChild(newUl)
    newDiv.appendChild(newP)
    newDiv.appendChild(newA)
});
};


nmadur(films, elList);
genresSelect(films)

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    elList.innerHTML = null

    const selectValue = elSelect.value

    const selectedMuvies = []

    films.forEach((movie) =>{
        if( selectValue === "all" || movie.genres.includes(selectValue) ){
            selectedMuvies.push(movie)
        }
    })

    nmadur(selectedMuvies, elList)

})
