console.log('working')

const getBtn = document.getElementById('get');
getBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://mysneakers.onrender.com/my_sneakers');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
});




const post = document.querySelector('#post');
console.log(post)         
if (post) {
  post.addEventListener('click', async (e) => {
    e.preventDefault()
    const inputForm = document.getElementById('input').value

    try {
      const response = await fetch('https://mysneakers.onrender.com/my_sneakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputForm
        })
      })    
      .then((response) => response.json())
    } catch (err) {
      // console.log(err.message)
    }
  });    
}

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
