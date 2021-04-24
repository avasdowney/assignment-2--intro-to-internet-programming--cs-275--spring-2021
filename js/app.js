let recipe = document.getElementById("riceRecipe")

function whiteRice() {
    let amountRice = parseFloat(prompt("Enter the amount of rice in cups you would like to cook: ", "1")); // default is one cup
    let amountWater = amountRice*2;

    recipe.innerHTML = " "; // clears the sprouted rice recipe
    recipe.innerHTML = "Combine " + String(amountRice) + " cups of rice with " + String(amountWater) + "cups of water and 1" + 
    "Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes."
}

function sproutedRice() {
    let amountRice = parseFloat(prompt("Enter the amount of rice in cups you would like to cook: ", "1")); // default is one cup
    let amountWater = amountRice*1.6;

    recipe.innerHTML = " "; //clears the white rice recipe
    recipe.innerHTML = "For slightly al dente rice: Combine " + String(amountRice) + " cups of rice with " + 
    String(amountWater) + " cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix. " +
    "Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. Remove from heat and " +
    "let stand for 5 minutes. Fluff with a fork and serve. For softer rice: Increase liquid by 1/2 cup " +
    "and cook time by 5 minutes.";
}

