console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    let dogImages = document.querySelector("#dog-image-container")
    let dogBreeds = document.querySelector("#dog-breeds")
    let breedDropdown = document.querySelector("#breed-dropdown")
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then((act) => {
        let dogArray = act.message
        dogArray.forEach(element => {
            let blankImg = document.createElement("img")
            blankImg.src = element
            dogImages.append(blankImg)
        });
    })


    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then((act) => {
        let breedArray = Object.keys(act.message)
        breedArray.forEach(element => {
            let blankLi = document.createElement("li")
            blankLi.innerText = element
            dogBreeds.append(blankLi)
            blankLi.addEventListener('click', function(){
                blankLi.style.color = "red"
                // console.log(dogArray[0])
            })
            breedDropdown.addEventListener('change', function(evt) {
                let breedName = blankLi.innerText
                let firstLetter = breedName.substring(0,1)
                let dropdownLetter = evt.target.value
                if (firstLetter !== `${dropdownLetter}`) {
                    return blankLi.style.display = "none"
                } else if (firstLetter === `${dropdownLetter}`){
                    return blankLi.style.display = ""
                }
            // })    
            // })
        });
})

})
})