let counter = 0;
function createData(item, price) {
    counter += 1;
    return { id: counter, "item": item, "price": price};
}

const menuData = [
    {
        "name": "Suya",
        "location": "2130 Oxford St, Berkeley, CA 94704",
        "menu": [createData("Beef Skewers", 6.85), createData("Chicken Skewers", 6.85), createData("Grilled Veggies Skewers", 6.85), createData("Prawn Skewers", 8.95), createData("Tilapia Fillet", 7.90), createData("Grilled Corn", 2.65) , createData("Roasted Potatoes", 2.65), createData("Steamed Veggies", 2.65), createData("Seasoned Rice",2.65), createData("Grilled Plantains",2.65), createData("Sweet Potato Chips",2.65), createData("Tilapia Special", 10), createData("Mixed Green Salad", 2.65), createData("Entree Salad", 9.40), createData("Wrap", 7.30), createData("Jamaican-Style Patties", 3.70), createData("Ginger Beer", 1.60), createData("Water", 1.60), createData("Coke",1.60), createData("Diet Coke", 1.60), createData("Sunkist", 1.60), createData("Sprite", 1.60)]
    },
    {
        "name": "Sliver",
        "location": "2213 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Pizza of the day", 20), createData("Salad", 5.49), createData("Root Beer", 2.29), createData("Mexican Coke", 2.29), createData("Green Sauce", 0)]
    },
    {
        "name": "Bongo Burger",
        "location": "2154 Center St, Berkeley, CA 94704",
        "menu": [createData("All American Burger", 4.25), createData("Turkey Burger", 4.50), createData("Mushroom Burger", 5.50), createData("Bacon Burger", 5.50), createData("Polish Sausage", 3.95), createData("Hot Dog", 3.25), createData("Soda Large", 1.75), createData("Soda Medium", 1.50), createData("Soda Small", 1.20), createData("Shish Kaba Sandwich", 7.75), createData("Chicken Sandwich", 7.15), createData("Persian Burger Sandwich", 6.50), createData("Half-Persian Burger Sandwich", 3.95)]
    },
    {
        "name": "Saigon Express",
        "location": "2045 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Ham Sandwich", 2.50), createData("Meat Pie Sandwich", 2.50), createData("Grilled Chicken Sandwich", 2.75), createData("Grilled Pork Sandwich", 2.75), createData("Vegetarian Sandwich", 2.50), createData("Tofu Sandwich", 2.75), createData("Imperial Rolls", 3.95), createData("Vietnamese Moon Crepe", 6.45), createData("Clay Pot", 7.45), createData("Bird's Nest Noodles", 7.45), createData("Rare Sliced Beef Pho", 5.95), createData("Well-Done Beef Pho", 5.95), createData("Tofu Pho", 5.95), createData("Stir Fried Noodles", 6.45), createData("Fried Rice", 5.95), createData("Curry Chicken", 6.45), createData("Orange Flavored Chicken", 5.95), createData("Soft Drink", 1.25), createData("Grass Jelly", 1.50), createData("Thai Iced Tea", 2.75), createData("Iced Coffee", 3.00)]
    },
    {
        "name": "Fresco",
        "location": "2177 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Taco (select ingredients below))", 2.50), createData("Burrito (select ingredients below)", 5.50), createData("Quesadilla (select ingredients below)", 6), createData("Plate (select ingredients below)", 8.50), createData("Steak",), createData("Chicken",), createData("Carnitas",), createData("Veggie",), createData("Fish",), createData(" Black Beans",), createData("Pinto Beans",), createData("Salsa",), createData("Cheese",), createData("Guac", .50), createData("Sour Cream",), createData("Tortilla Chips",), createData("Water",)]
    },
    {
        "name": "Arinell's",
        "location": "2109 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Neopolitan (regular)", 3), createData("Sicilian (deep dish)", 3.50), createData("Vegan Slice", 3.25), createData("With toppings (specify in notes)", 0), createData("S Coke", 1.25), createData("L Coke", 1.50), createData("S Diet Coke", 1.25), createData("L Diet Coke",1.50), createData("S Sprite", 1.25), createData("L Sprite", 1.50), createData("S Root Beer", 1.25), createData("L Root Beer", 1.50), createData("S Fruit Punch", 1.25), createData("L Fruit Punch", 1.50), createData("S Lemonade", 1.25), createData("L Lemonade", 1.50)]
    },
    {
        "name": "El Burro Picante",
        "location": "2021 University Ave, Berkeley, CA 94704",
        "menu":[createData("Burrito (regular)", 5), createData("Donkey Burrito", 10), createData("Super Burrito", 7), createData("Taco", 2), createData("Extra beans", 1), createData("Extra rice", 1), createData("Guacamole", 0.95), createData("Flautas", 6.95), createData("Regular Nachos", 6.95), createData("Steak",), createData("Chicken",), createData("Carnitas",), createData("Veggie",), createData("Fish",), createData(" Black Beans",), createData("Pinto Beans",), createData("Salsa",), createData("Cheese",), createData("Agua Fresca", 2.25), createData("Coke", 1.50), createData("Jarito (mandarin)", 1.25), createData("S Horchata", 1.95), createData("L Horchata", 2.25), createData("Bottled water", 1.50)]
    }
];

export default menuData;