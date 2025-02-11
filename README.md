Recipes API

This project is a RESTful API for managing a collection of recipes. It allows users to create, read, update, and delete recipes. The API is built using Node.jsand Express, and it uses MongoDB Atlas as the database.

Features:

Create a Recipe: Add a new recipe to the collection.

Get All Recipes: Retrieve a list of all recipes in the collection.

Get Recipe by ID: Retrieve the details of a specific recipe using its unique ID.

Update a Recipe: Update the details of an existing recipe.

Delete a Recipe: Delete a specific recipe from the collection.

Technologies Used:

Node.js

Express

MongoDB Atlas

Mongoose

Postman (for testing the API)

Installation:

Clone the repository:

git clone https://github.com/NickshanJ/Recipes-App.git

Change to the project directory:

cd Recipes-App

Install dependencies:

npm install

Project Structure:

index.js:

index.js is the central file of your application, responsible for connecting to the database, setting up the Express server, and defining the main routes for the API.

Database Connection: It uses Mongoose to connect to the MongoDB Atlas database.

Middleware: It sets up middleware to parse JSON requests.

Routes: It imports and uses the routes defined for the API endpoints.

database.js:

database.js is responsible for connecting to MongoDB Atlas.

Connection Function: It defines and exports the function to connect to the MongoDB Atlas database using Mongoose.

Error Handling: It includes error handling to log any connection errors.

controller.js:

Contains the logic for handling requests and interacting with the database.

createRecipe: Creates a new recipe.

getAllRecipes: Retrieves all recipes.

getRecipeById: Retrieves a recipe by its ID.

updateRecipe: Updates a recipe by its ID.

deleteRecipe: Deletes a recipe by its ID.

recipe.js:

Defines the Mongoose schema for the Recipe model.

RecipeSchema: Defines the schema for a recipe, including name, ingredients, instructions, and created_at fields.

routes.js:

Defines the API routes for the application.

POST /api/recipes: Create a new recipe.

GET /api/recipes: Get all recipes.

GET /api/recipes/:id: Get a recipe by ID.

PUT /api/recipes/:id: Update a recipe by ID.

DELETE /api/recipes/:id: Delete a recipe by ID.

Usage:

Creating a Recipe:

To create a new recipe, send a POST request to https://recipes-app-hzza.onrender.com/api/recipes with the recipe data in the request body.

Retrieving All Recipes:

To retrieve all recipes, send a GET request to https://recipes-app-hzza.onrender.com/api/recipes.

Retrieving a Recipe by ID:

To retrieve a recipe by its ID, send a GET request to https://recipes-app-hzza.onrender.com/api/recipes/:id.

Updating a Recipe:

To update a recipe by its ID, send a PUT request to https://recipes-app-hzza.onrender.com/api/recipes/:id with the updated recipe data in the request body.

Deleting a Recipe:

To delete a recipe by its ID, send a DELETE request to https://recipes-app-hzza.onrender.com/api/recipes/:id.

