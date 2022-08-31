const searchProcess = (dataLimit)=>{
    loadSpinners(true);
    // get value from input 
    const searchField= document.getElementById('search-field')
    searchField.textContent='';
    const searchValue= searchField.value ;
    searchField.value='';
    loadPhones(searchValue,dataLimit)
  }