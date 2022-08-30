const loadPhones= async (searchValue)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    const res= await fetch(url)
    const data= await res.json()
    displayPhones(data.data)
}
const displayPhones=(phones)=>{
    const phoneContainer= document.getElementById('phone-container')
    phones= phones.slice(0,20)
const noPhone= document.getElementById('no-phone')

// error handling 
if(phones.length===0){
  noPhone.classList.remove('d-none')
}
else{
  noPhone.classList.add('d-none')
}
// error handling end 

phones.forEach(phone=>{
    console.log(phone)
    const createDiv= document.createElement('div')
    createDiv.classList.add('col')
    createDiv.innerHTML=`
    <div class="col p-5">
              <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
    `
    phoneContainer.appendChild(createDiv);

    // spinners 
  
})
loadSpinners(false);
}

document.getElementById('search-button').addEventListener('click',function(){
  // spinners
  loadSpinners(true);
  // get value from input 
  const searchField= document.getElementById('search-field')
  searchField.textContent='';
  const searchValue= searchField.value ;
  searchField.value='';
  loadPhones(searchValue)

})

// spinners start 

const loadSpinners = isLoading=>{
  const  loaderSection = document.getElementById('spinners')
if(isLoading){
   loaderSection.classList.remove('d-none')
}
else{
   loaderSection.classList.add('d-none')
}
}

// spinners end 


// loadPhones();