type MenuItem = {
    name: string;
    prices: {
      [size: string]: string; // Flexible pricing structure for different sizes
    };
    description?: string; // Optional description
  };

  type MenuCategory = {
    category: string;
    note?: string;
    items: MenuItem[];
  };

  const Menu = () => {
    const menuData: MenuCategory[] = [
      {
        category: "Coffee & Espresso (Hot)",
        note: "Almond, Oat, Soy, Whole, Skim Milk",
        items: [
          { name: "Coffee", prices: { "8oz": "1.95", "12oz": "2.25", "16oz": "2.85" } },
          { name: "Espresso Single", prices: { "4oz": "2.25", "12oz": "-", "16oz": "-" } },
          { name: "Espresso Double Shot", prices: { "8oz": "3.00", "12oz": "-", "16oz": "-" } },
          { name: "Carmel Macchiato", prices: { "8oz": "3.05", "12oz": "3.75", "16oz": "4.25" } },
          { name: "Americano", prices: { "8oz": "2.55", "12oz": "3.25", "16oz": "3.75" } },
          { name: "Red Eye", prices: { "8oz": "2.65", "12oz": "3.25", "16oz": "3.85" } },
          { name: "Cappuccino", prices: { "8oz": "3.05", "12oz": "3.55", "16oz": "3.95" } },
          { name: "Latte", prices: { "8oz": "3.05", "12oz": "3.55", "16oz": "3.95" } },
          {
            name: "Flavored Latte",
            prices: { "8oz": "3.55", "12oz": "3.95", "16oz": "4.55" },
            description: "Vanilla, Mocha, White Mocha, Carmel, Hazelnut, Almond, Cinnamon",
          },
          { name: "Chai Latte", prices: { "8oz": "2.85", "12oz": "3.35", "16oz": "3.85" } },
          { name: "Benna Cap", prices: { "8oz": "3.50", "12oz": "3.95", "16oz": "4.55" } },
          { name: "Hot Chocolate", prices: { "8oz": "3.50", "12oz": "-", "16oz": "-" } },
        ],
      },
      {
        category: "Sandwiches",
        note: "Bagel $1.50 (Plain, Everything, Cinnamon Raisin, Sesame, Whole Wheat) | Baguette or GF Roll Add $1.00 | Add Avocado $2.00",
        items: [
          { name: "Mozzarella, Tomato, & Basil", prices: { Price: "7.65" } },
          { name: "Brie & Honey", prices: { Price: "7.65" } },
          { name: "Avocado, Tomato, & Cream Cheese", prices: { Price: "7.65" } },
          { name: "Nutella & Banana", prices: { Price: "7.65" } },
          { name: "Whitefish Salad, Cream Cheese", prices: { Price: "7.65" } },
          { name: "Tofutti, Avocado, Sun-Dried Tomato & Red Onion", prices: { Price: "7.65" }, description: "⭐ Vegan Option" },
          { name: "Chicken Salad & Tomato", prices: { Price: "7.65" } },
          { name: "Goat Cheese, Cucumber & Basil", prices: { Price: "7.65" } },
          {
            name: "Hummus, Bell Pepper, & Spinach",
            prices: { Price: "7.65" },
            description: "⭐ Vegan Option",
          },
          { name: "Extras: Tomato, Bell Pepper, Cucumber, Spinach, Sun-Dried Tomato", prices: { Price: "1.00" } },
        ],
      },
      {
        category: "Smoothies",
        note: "Choose: Dairy or Vegan Yogurt, Add: Protein Powder, Peanut Butter Almonds or GreenSuperfood 1.00 | Ice cream Cone 2.50 | Ice cream Cup 3.50 | Sprinkle or Syrup +0.50 Add Fruit 1.00",
        items: [
          { name: "Apple Juice, Strawberry, Banana", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Avocado, Condensed Milk, Milk", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Chai, Milk", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Apple Juice, Kiwi, Blueberries", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Orange Juice, Pineapple, Banana", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Soy Milk, Peanut Butter, Banana", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Espresso, Milk, Vanilla Syrup", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Lemonade, Blueberries, Banana", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Apple Juice, Mango, Pineapple", prices: { "16oz": "6.45", "20oz": "6.95" } },
          { name: "Chocolate, Milk", prices: { "16oz": "6.45", "20oz": "6.95" } },
        ],
      },
      {
        category: "Matcha (Hot)",
        note: "Almond, Oat, Soy, Whole, Skim Milk",
        items: [
          { name: "Matcha Shot", prices: { "12oz": "2.50", "16oz": "-" } },
          { name: "Matcha Latte", prices: { "12oz": "4.00", "16oz": "4.50" } },
          { name: "Matcha Cappuccino", prices: { "12oz": "4.50", "16oz": "5.00" } },
          {
            name: "Matcha Flavored Latte",
            prices: { "12oz": "4.50", "16oz": "5.00" },
            description: "White Mocha, Coconut, Peach, Vanilla, Hazelnut",
          },
          { name: "Matcha Espresso Latte", prices: { "12oz": "4.95", "16oz": "5.35" } },
        ],
      },
      {
        category: "Matcha (Ice)",
        note: "Almond, Oat, Soy, Whole, Skim Milk",
        items: [
          { name: "Matcha Latte", prices: { "16oz": "4.95", "20oz": "5.25" } },
          { name: "Matcha Cappuccino", prices: { "16oz": "4.95", "20oz": "5.25" } },
          {
            name: "Matcha Flavored Latte",
            prices: { "16oz": "5.25", "20oz": "5.65" },
            description: "White Mocha, Coconut, Peach, Vanilla, Hazelnut",
          },
          { name: "Matcha Espresso Latte", prices: { "16oz": "5.45", "20oz": "5.95" } },
          { name: "Matcha Frappe", prices: { "16oz": "6.25", "20oz": "6.75" } },
        ],
      },
      {
        category: "Tea",
        items: [
          { name: "Black Tea / Jasmine Green Tea", prices: { "16oz": "2.80", "20oz": "3.00" } },
          { name: "Rose Black Tea / Matcha Tea", prices: { "16oz": "3.00", "20oz": "3.50" } },
          {
            name: "Fruit Tea",
            prices: { "16oz": "4.50", "20oz": "4.85" },
            description: "Passion Fruit, Mango, Strawberry, Peach",
          },
        ],
        note: "Hot Tea Only 16oz | Add Fruit Flavor +0.50 | Add Matcha +0.55",
      },
    ];

    return (
      <div className="bg-[#383838] text-white py-8 px-4">
        <h1
          className="text-5xl font-bold text-center mb-8"
          style={{ fontFamily: "'Bebas Neue'" }}
        >
          Menu
        </h1>
        {menuData.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Section Header */}
            <h2
              className="text-4xl font-semibold mb-4 text-[#e18434] border-b-2 border-[#e18434] pb-2"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {category.category}
            </h2>
            {category.note && (
              <p className="mb-4 text-gray-400 text-sm italic">{category.note}</p>
            )}

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1c1c] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  {/* Item Name */}
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  {/* Item Description */}
                  {item.description && (
                    <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                  )}
                  {/* Prices */}
                  <ul className="space-y-1">
                    {Object.entries(item.prices).map(([size, price]) => (
                      <li key={size} className="flex justify-between">
                        <span className="text-sm text-gray-300">{size}</span>
                        <span className="text-sm text-[#e18434]">${price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Menu;
