



//==============================get===================================

const getBtn = document.getElementById('GET');
getBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/my_sneakers');
    const data = await response.json();
    //console.log(data);

    const container = document.querySelector('#text-container');
    container.innerHTML = 'LIST'
    data.forEach((item) => {
      const div = document.createElement('div');
      const btn = document.createElement('button');
      btn.className = 'delete'
      btn.innerText = 'Delete'
      div.append(btn)
      div.innerText = item.notes;
      container.append(div);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

//===============================post======================================



        
const post = document.querySelector('#post');

  post.addEventListener('click', async (e) => {
    const notes = document.getElementById('input').value
    const note = {
      notes: notes
    }
    const container = document.querySelector('#text-container');
      const div = document.createElement('div');
      div.innerHTML = notes;
      container.append(div);

    try{
      await fetch ('/my_sneakers', {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(note)
      })
    .then((response)=>response.json())
    .then((data)=>{
      console.log("Success: ", data)
    })
      
    }catch (err){
      console.log(err.message)
    }
  })


//============================delete============================


const deleteBtn = document.getElementById('delete');

deleteBtn.addEventListener('click', async (e) => {
  
  try {
    const response = await fetch(`/my_sneakers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log('Data deleted successfully');
    } else {
      console.error('An error occurred while deleting the data');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


//=================================update==============================


const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', async(e) => {
  e.preventDefault();
  let id = 54;
  try {
    const response = await fetch(`/my_sneakers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      if (response.headers.get('Content-Type').includes('application/json')) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log(await response.text());
      }
    } else {
      throw new Error('Something went wrong with the update request');
    }
  } catch (error) {
    console.error(error);
  }
});












// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();

// //getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
// sneaks.getProducts("Jordan 1", 5, function(err, products){
//     console.log(products)
// })

//Product object includes styleID where you input it in the getProductPrices function
//getProductPrices(styleID, callback) takes in a style ID and returns sneaker info including a price map and more images of the product
// sneaks.getProductPrices("FY2903", function(err, product){
//     console.log(product)
// })
//getMostPopular(limit, callback) takes in a limit and returns an array of the current popular products curated by StockX
// sneaks.getMostPopular(10, function(err, products){
//     console.log(products)
// })
