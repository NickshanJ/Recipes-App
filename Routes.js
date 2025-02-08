const express = require('express');
const router = express.Router();
const controller = require('./Controller');

router.post('/recipes', controller.createRecipe);
router.get('/recipes', controller.getAllRecipes);
router.get('/recipes/:id', controller.getRecipeById);
router.put('/recipes/:id', controller.updateRecipe);
router.delete('/recipes/:id', controller.deleteRecipe);

module.exports = router;