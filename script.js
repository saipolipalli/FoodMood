const recipes = {
  happy: [
    "Ice Cream Sundae 🍨",
    "Fruit Salad 🥗",
    "Mango Smoothie 🥭",
    "Chocolate Cake 🍰",
    "Strawberry Cheesecake 🍓"
  ],
  sad: [
    "Mac and Cheese 🧀",
    "Tomato Soup 🍅",
    "Pancakes with Syrup 🥞",
    "Grilled Cheese Sandwich 🥪",
    "Choco Lava Cake 🍫"
  ],
  stressed: [
    "Chamomile Tea 🍵",
    "Avocado Toast 🥑",
    "Dark Chocolate Bar 🍫",
    "Banana Smoothie 🍌",
    "Mixed Berries Yogurt 🫐"
  ],
  bored: [
    "Loaded Nachos 🧀",
    "Mini Tacos 🌮",
    "DIY Pizza 🍕",
    "Sushi Rolls 🍣",
    "Instant Ramen 🍜"
  ],
  romantic: [
    "Strawberries with Cream 🍓",
    "Red Wine Pasta 🍝",
    "Heart-shaped Cookies ❤️",
    "Chocolate Fondue 🍫",
    "Shrimp Scampi 🍤"
  ],
  celebrating: [
    "Cupcakes with Sprinkles 🧁",
    "BBQ Chicken 🍗",
    "Cheesy Garlic Bread 🥖",
    "Party Platter 🥳",
    "Mocktail Drinks 🍹"
  ],
  tired: [
    "Coffee & Croissant ☕🥐",
    "Energy Bar 🍫",
    "Green Tea 🍵",
    "Egg Toast 🍳",
    "Chia Pudding 🥣"
  ],
  sick: [
    "Chicken Soup 🍲",
    "Ginger Tea 🍵",
    "Boiled Rice 🍚",
    "Honey-Lemon Drink 🍯🍋",
    "Steamed Veggies 🥦"
  ]
};


function getRecipe(mood) {
  const moodRecipes = recipes[mood];
  const randomIndex = Math.floor(Math.random() * moodRecipes.length);
  const selectedDish = moodRecipes[randomIndex];

  document.getElementById("result").innerHTML = `
    <h2>Try: ${selectedDish}</h2>
    <p>Perfect for when you're feeling <strong>${mood}</strong>!</p>
  `;
}
