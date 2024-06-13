const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 8000;


//cors 
app.use(cors({

  origin: ["http://localhost:3000"],
  credentials: true,
}));


// GET route to retrieve the cart items
app.get('/cart', (req, res) => {
  res.json(cart);
});

app.get('/', (req, res) => {
    const responseData = {
      data: [
        { name: "Frank's RedHot", price: 3.64, description: " Frank's RedHot Original Cayenne Pepper Hot Sauce is made with a premium blend of aged cayenne peppers to add a kick of heat and whole lot of flavor to your favorite foods. Bring the heat to wings, chicken sandwiches, buffalo chicken dip, eggs -- put that $#!t on everything! Our sauce is essential at tailgates, parties, cookouts, you name it. Frank's Hot Sauce is a recipe that has been tantalizing taste buds since 1964, and it's not stopping anytime soon." ,origin: 'USA', ingredients: 'Aged Cayenne Red Peppers, Distilled Vinegar, Water, Salt and Garlic Powder', Scoville : 450, Size : 12, Image : "https://ibb.co/JsRZjQm"},
        { name: "Huy Fong Sriracha", price: 9.99, description: "Natural color. Sriracha, made from sun ripened chiles, is ready to use in soups, sauces, pasta, pizza, hot dogs, hamburgers, chow mein or on anything to add a delicious, spicy taste." , origin: 'Origin: USA', ingredients: 'Chili, Sugar, Salt, Garlic, Distilled Vinegar, Potassium Sorbate and Sodium Bisulfite as Preservatives, Xanthan Gum.', Scoville : 2200, Size : 17, Image : "https://ibb.co/XyDQ9fn"},
        { name: "Cholula", price: 7.94, description: "Cholula Original Hot Sauce is crafted from a generations-old family recipe that features arbol and piquin peppers and a blend of regional spices to deliver authentic Mexican flavor and heat." , origin: 'Origin: Mexico', ingredients: 'Water, Peppers (Arbol And Piquin), Salt, Vinegar, Garlic Powder, Spices And Xanthan Gum.', Scoville : 3600, Size : 12, Image : "https://ibb.co/d6MnRfB"},
        { name: "Texas Pete", price: 2.91, description: "Texas Pete is a classic go-to that has been enchanting taste buds for decades—especially in the South. With its medium 750 SHU intensity and tangy vinegar base, this hot sauce adds a zesty and flavorful punch." , origin: 'USA', ingredients: 'Vinegar, Aged Peppers (Peppers, Salt, Vinegar), Water, Xanthan Gum and Benzoate of Soda (to Preserve Freshness and Flavor)', Scoville : 750, Size : 12, Image : "https://ibb.co/3kYnQLb"},
        { name: "Tapatío", price: 3.10, description: "Tapatio hot sauce, is a sauce that adds a bit of flavour to your food, made with hot peppers and spices to provide the right amount of heat to your recipes. Use the Tapatio hot sauce with chips, tortillas and other foods for more flavour" , origin: 'USA', ingredients: 'Water, Red Peppers, Salt, Spices, Garlic, Acetic Acid, Xanthan Gum, Sodium Benzoate as a Preservative.', Scoville : 3000, Size : 10, Image : "https://ibb.co/9GJ3knP"},
        { name: "Tabasco", price: 3.70, description: "It's a legendary pepper sauce with a signature kick and livens up dishes like pizza, eggs, burgers, tacos and more. Plus, it's made from three simple ingredients: aged red pepper mash, distilled vinegar and salt. It's non-GMO Project Verified, gluten free, Kosher, Halal, and is aged in oak barrels for up to three years on Avery Island, Louisiana before bottling in premium glass packaging." , origin: 'USA', ingredients: 'Distilled Vinegar, Red Pepper, Salt', Scoville : 2500, Size : 5, Image : "https://ibb.co/CbwmkkZ"},
        { name: "Louisiana Hot Sauce", price: 2.89, description: "The perfect everyday hot sauce that will complement any meal. Made from aged hot peppers and vinegar, this sauce is anything but basic!" , origin: 'USA', ingredients: 'Ingredients: Aged Peppers, Distilled Vinegar, Salt', Scoville : 450, Size : 12, Image : "https://ibb.co/ncLJdXv"},
        { name: "Valentina", price: 1.70, description: "Valentina Salsa Picante is a Mexican hot sauce that is well known for its citrus and spicy taste. This flavorful condiment has mild heat and is perfect for adding a touch of flavor to almost any dish. The flavor is tangy, spicy, and slightly vinegary. Valentina is really good to try this sauce on all your favorite foods. We discovered Valentina Mexican Hot Sauce. It is delicious and hot; without burning you forever" , origin: 'Mexico', ingredients: 'Water, Chili Peppers, Vinegar, Salt, Spices, 0.1% Sodium Benzoate as a Preservative.', Scoville : 900, Size : 12, Image : "https://ibb.co/MZrtDdn"},
        { name: "Crystal", price: 2.91 , description: "Think of this sauce as salt and pepper made better but with an extra kick. Crystal Extra Hot Hot Sauce adds a flavorful touch to everything, including beef and pork, fish and shellfish, chicken, vegetable dishes and more. Serve it straight on oysters, or add kick to a cocktail. You can use it to marinate or barbecue, pour on sass or zip up sauce!" , origin: 'USA', ingredients: 'Aged red cayenne peppers, distilled vinegar, water, salt, natural flavorings, xanthan gum.', Scoville : 4000, Size : 12, Image : "https://ibb.co/Rzh2SR9"}
      ]
    };
    res.json(responseData);
  });
  //name, price, description, origin, ingredients, spicy level


// Middleware to parse JSON bodies
app.use(express.json());


// In-memory array to store cart items
let cart = [];

// POST route to add an item to the cart
app.post('/addcart', (req, res) => {
    const newItem = req.body;
    
    cart.push(newItem);
    res.status(201).send({ message: 'Item added to cart', item: newItem });
    
});

app.delete('/deletecart', (req, res) => {
  const { name } = req.body;
  const index = cart.findIndex(item => item.name === name);

  if (index === -1) {
    return res.status(404).send({ message: 'Item not found in cart' });
  }

  cart.splice(index, 1);
  res.status(200).send({ message: 'Item removed from cart', name });
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
