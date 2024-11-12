//dom elements
const productDom = document.querySelector('.products-center');


///fetching data and traversing data
class Products{
    
    async fetchProducts(){
        try{
        let res =  await fetch('./data/products.json');//calling api
        let data = await res.json(); //response stored in data after parsing which is array of objects
        // console.log(data);   
        // console.log(typeof(data)); 
    //    let  prodcutsData = data.items; ///going into the items

    /// now i want to acess each property
        let productData = data.items.map((elements)=>{  
        const{title,price,type,rating} = elements.fields///traversing throuh the properties and destructuring ,assign to variables
        const id = elements.id; 
            const imageUrl = elements.fields.image.url
            return{id,title,price,type,rating,imageUrl}

            ///********************* */
            //let obj1 = JSON.parse(elements)...shortcut but wont work for evry data
            ////////***************** */

           /* map returns our json data into below format
            productData=[
                {
                    id:1,
                    title:"queen size bed",
                    type:"household",
                    price:2500,
                    rating:4,
                    imageUrl :"../images/product-1.jpg"
                }
            ]*/
            })
            return productData
         
        }catch(error){
            console.log(error);
            
                     }
    }
 

} 
const products = new Products();
products.fetchProducts().then((data)=>{ ///fetchProducts is an async function it returns promise so .then is used to access its resolved value
    console.log(data);
    //console.log(typeof(data));
    
    
})


////DATA RECEIVED NOW WE NEED TO PUT DATA INTO THE UI










// let product = new Products();
// product.fetchProducts().then((data)=>{
//         console.log(data);
        
// })
/*
 ///above code return like below
ProductData = [
    {
        id:"1",
        title:"queen size bed",
        type : "household",
        price : "2500",
        rating :4,
        image :"../images/product-1.jpg "
    }
]
    */