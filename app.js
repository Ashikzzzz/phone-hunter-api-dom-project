const loadPhones= async (searchValue,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    const res= await fetch(url)
    const data= await res.json()
    displayPhones(data.data,dataLimit)
}
const displayPhones=(phones,dataLimit)=>{
    const phoneContainer= document.getElementById('phone-container')
    phoneContainer.textContent='';
    // display 10 only 
   
    if( dataLimit && phones.length>10){
      const showAll = document.getElementById('show-all')
      phones= phones.slice(0, 10)
      showAll.classList.remove('d-none')
    }
    else{
      const showAll = document.getElementById('show-all')
      showAll.classList.add('d-none')
    }
   
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
    // console.log(phone)
    const createDiv= document.createElement('div')
    createDiv.classList.add('col')
    createDiv.innerHTML=`
    <div class="col p-5">
              <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">See details</button>
                 
                  
                </div>
              </div>
            </div>
    `
    phoneContainer.appendChild(createDiv);

    // spinners 
  
})
loadSpinners(false);
}




// search input by enter button 
document.getElementById('search-field').addEventListener('keypress', function (e) {
  console.log(e.key)
  if (e.key === 'Enter') {
    searchProcess(10)
  }
});

document.getElementById('search-button').addEventListener('click',function(){
  // spinners
 
searchProcess(10)
})

document.getElementById('show-all-btn').addEventListener('click',function(){
  searchProcess();
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

const loadPhoneDetail= async (id)=>{
const url=`https://openapi.programming-hero.com/api/phone/${id}`
const res= await fetch(url)
const data= await res.json()
displayLoadPhoneDetail(data.data)
}

const displayLoadPhoneDetail=(phone)=>{
console.log(phone)
const loadBrand= document.getElementById('staticBackdropLabel')
loadBrand.innerText=phone.name;
const loadAll= document.getElementById('load-all')
loadAll.innerHTML=`
<img src="${phone.image}" alt="">
<h4>ReleaseDate: ${phone.releaseDate ? phone.releaseDate : "no release date"}</h4>
<p>memory: ${phone.memory ? phone.memory : "no memory"}</p>
<p>Bluetooth: ${phone.others.Bluetooth ? phone.others.Bluetooth : "no bluetooth"}</p>
<p>WLAN: ${phone.others.WLAN ? phone.others.WLAN : "no WLAN"}</p>


`
}




// loadPhones('apple');