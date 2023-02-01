console.log('working')


const post = document.getElementById('post');
post.addEventListener('click',async(e)=> {
e.preventDefault()
  const inputForm = document.getElementById('input').value


    try {
      const response = await fetch('https://mysneakers.onrender.com/my_sneakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          inputForm
        )
      })
      .then((response) => response.json())
    } catch (err) {
      console.log(err.message)
    }
  });


  
// const post = document.getElementById('post');
// post.addEventListener('click', postData);
  
// const postData = async () =>  {
//     try {
//       const response = await fetch('https://mysneakers.onrender.com/my_sneakers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(
//           response
//         )
//       })
//       .then((response) => response.json())
//     } catch (err) {
//       console.log(err.message)
//     }
//   }
  






//   async function getData() {
//     try {
//       const response = await fetch('https://mysneakers.onrender.com/my_sneakers');
//       const data = await response.json();
//       // do something with the data here
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
//   const get = document.querySelector()

//   async function deleteData(id) {
//     try {
//       const response = await fetch(`https://mysneakers.onrender.com/my_sneakers/${id}`, {
//         method: 'DELETE'
//       });
//       // do something with the response data here
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
  
  










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
