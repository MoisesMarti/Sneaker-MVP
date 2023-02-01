



//==============================get===================================

const getBtn = document.getElementById('GET');
getBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://mysneakers.onrender.com/my_sneakers');
    const data = await response.json();
    //console.log(data);

    const container = document.querySelector('.text-container');
    data.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = item.notes;
      container.append(div);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


//===============================post======================================

// const createNewDinoType = async (dinoType) => {
//   const options = {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//           "type": `${dinoType}`
//       })
//   }

//   const response = await fetch(`${apiURL}/dino/types`, options)
//   const sqlQuery = await response.json()
// }

// const createDinoTypeBtn = document.getElementById('createDinoTypeBtn')
// createDinoTypeBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const dinoTypeName = document.getElementById('dinoTypeName')    
//     createNewDinoType(dinoTypeName.value)
// });


const post = document.querySelector('#post');
        

//   post.addEventListener('click', async (e) => {
//     e.preventDefault()
//     const notes = document.getElementById('input').value
//      console.log(notes)

//     try {
//       const response = await fetch('https://mysneakers.onrender.com/my_sneakers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             notes
//           })
//         })   
//        // .then((response) => response.json())
//        .then((response) => {
//         console.log(response)
//        })
//         console.log('post worked')
//       } catch (err) {
//       // console.log(err.message)
//     }
//   });    

  post.addEventListener('click', async (e) => {
    e.preventDefault()
    const notes = document.getElementById('input').value
     console.log(notes)

    try{
      const response = await fetch ('https://mysneakers.onrender.com/my_sneakers',{
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(notes)
      })
    .then((response)=>response.json());
      console.log(err.message);
    }catch (err){
      console.log(err.message)
    }
  })


//============================delete============================

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  id = 11;
  try {
    const response = await fetch(`https://mysneakers.onrender.com/my_sneakers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log('Data deleted successfully');
      // refresh the UI or refetch the data
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
    const response = await fetch(`https://mysneakers.onrender.com/my_sneakers/${id}`, {
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
