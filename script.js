function showRecipe(recipeName) {
    const recipes = {
        'Spaghetti Bolognese': 'Ingredients: Spaghetti, minced beef, tomato sauce. Instructions: Cook spaghetti, prepare sauce, mix together.',
        'Chicken Curry': 'Ingredients: Chicken, curry powder, coconut milk. Instructions: Cook chicken, add spices, simmer with coconut milk.',
        'Vegetable Stir Fry': 'Ingredients: Mixed vegetables, soy sauce, garlic. Instructions: Stir fry vegetables, add sauce, serve hot.'
    };
    document.getElementById('recipe-content').textContent = recipes[recipeName] || 'Recipe not found.';
}