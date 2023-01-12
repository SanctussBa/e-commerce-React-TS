# e-commerce store React-TS

### Demo of this app:
![](https://github.com/SanctussBa/e-commerce-React-TS/blob/master/demo.gif?raw=true)

### Screenshot of this app:
![](https://github.com/SanctussBa/e-commerce-React-TS/blob/master/screenshot2.jpg?raw=true)

## What is this project about?

* This is an fake furniture e-commerce app that allows users to view and filter products according to furniture category. 
User can add selected products to their shopping cart.
* This serves as React, TypeScript learning project. 

## What technologies were used?

* This is full stack application. Back-end is `.net web api`
* Store products are saved in `SQL database`. 
* `React` with `TypeScript`
* Styling: `CSS`
* Routing: `react-router-dom`

## Main features of this app:

* On the first page load all products are fetched from back-end API in random order. 
* Filter can sort products by categories. Only selected category will be displayed. Dropdown menu will show up with a list of all product categories available.
* [Add To Cart] button will add product to the cart and red indicator with amount of added products will be displayed on the shopping cart icon.
* Stock count will decrease by increasing product quantity selected. 
* When only 1 product left in stock, it will show information that it is last available on the picture of product.
* When all available products from the stock are selected. Add to cart button will be exchanged with the text [Not Availabe] and information [Sold Out] will be displayed.

## What can be further improved?

1. Description of products are implemented in API but not used in Front-End. 
2. Mobile version is not implemented as I was focusing learning on functionality than styling.
4. In cart component [Payment] button is not active. I was planning to implement Payment functionality 
as interaction with API and decreasing stock count from database.
5. Multiple filtering options could be implemented like filter by price.
