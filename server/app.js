const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const responseData = {
      data: [
        { name: "Frank's RedHot", price: 3.64, description: " Frank's RedHot Original Cayenne Pepper Hot Sauce is made with a premium blend of aged cayenne peppers to add a kick of heat and whole lot of flavor to your favorite foods. Bring the heat to wings, chicken sandwiches, buffalo chicken dip, eggs -- put that $#!t on everything! Our sauce is essential at tailgates, parties, cookouts, you name it. Frank's Hot Sauce is a recipe that has been tantalizing taste buds since 1964, and it's not stopping anytime soon." ,origin: 'USA', ingredients: 'Aged Cayenne Red Peppers, Distilled Vinegar, Water, Salt and Garlic Powder', Scoville : 450, Size : 12},
        { name: "Huy Fong Sriracha", price: 9.99, description: "Natural color. Sriracha, made from sun ripened chiles, is ready to use in soups, sauces, pasta, pizza, hot dogs, hamburgers, chow mein or on anything to add a delicious, spicy taste." , origin: 'USA', ingredients: 'Chili, Sugar, Salt, Garlic, Distilled Vinegar, Potassium Sorbate and Sodium Bisulfite as Preservatives, Xanthan Gum.', Scoville : 2200, Size : 17},
        { name: "Cholula", price: 7.94, description: "Cholula Original Hot Sauce is crafted from a generations-old family recipe that features arbol and piquin peppers and a blend of regional spices to deliver authentic Mexican flavor and heat." , origin: 'Mexico', ingredients: 'Water, Peppers (Arbol And Piquin), Salt, Vinegar, Garlic Powder, Spices And Xanthan Gum.', Scoville : 3600, Size : 12},
        { name: "Texas Pete", price: 2.91, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12},
        { name: "", price: 3.64, description: "" , origin: 'USA', ingredients: '', Scoville : 450, Size : 12}
      ]
    };
    res.json(responseData);
  });
  //name, price, description, origin, ingredients, spicy level

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
