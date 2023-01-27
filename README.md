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

## How you can clone and run this project?

From your command line, first clone this repo:

```
# Clone this repo
>>> git clone git@github.com:SanctussBa/e-commerce-React-TS.git

# Go into the repository
>>> cd .\e-commerce-React-TS\

# Remove current origin repository
>>> git remote remove origin

```

## Configure .NET Web API:

1. If you don't have it yet. Download [Microsoft SQL Server Management Studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16#download-ssms)
2. Set up your SQL Server and Create new database.
3. Open API folder with your IDE
4. Go into appsettings.json file and change `ConnectionStrings`
```json
"DataContext": "Server=localhost;Database=[your DB name];User Id=sa;Password=[your password];TrustServerCertificate=True"
```
5. Create your first migration
```
>>> dotnet ef migrations add InitialCreate
```
6. Create your database and schema
```
>>> dotnet ef database update
```
7. Run API
```
>>> dotnet watch run
```
If there are no errors it means you are connected to database successfully. Double check if you have new Table in your database. In Swagger you can see empty array when you run get method.
You can fill up database with new products manually with POST method. (add picture by choosing file, !always leave image text field empty)


## Configure React App

1. Go into `/REACT/ecommerc-react/` directory
2. Install all packages and dependancies
```
>>> npm i
```
3. Start application
```
>>> npm start
```

App should be running by its own. If it is not running Open http://localhost:3000 to view it in the browser.
