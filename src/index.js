console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    let dogImages = document.querySelector("#dog-image-container")
    let dogBreeds = document.querySelector("#dog-breeds")

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then((act) => {
        let dogArray = act.message
        dogArray.forEach(element => {
            let blankImg = document.createElement("img")
            blankImg.src = element
            dogImages.append(blankImg)
        });
        console.log(dogArray[0])
    })


    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then((act) => {
        let breedArray = Object.keys(act.message)
        breedArray.forEach(element => {
            let blankLi = document.createElement("li")
            blankLi.innerText = element
            dogBreeds.append(blankLi)
            console.log(breedArray)
        });
        // console.log(dogArray[0])
    })


})
// console.log(dogImages)