
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // This will be the string category name
}
export const allProductsData: Product[] = [
  // --- Male Clothing (Party & Gym) ---
  { id: 1, name: "Men - Party Shirt Slim Fit", description: "A sleek, slim-fit shirt perfect for parties.", image: "/images/product_01.jpg", price: 45.99, category: "Men - Party" },
  { id: 2, name: "Men - Party Trousers Classic", description: "Classic cut trousers for a sharp party look.", image: "/images/product_02.jpg", price: 69.50, category: "Men - Party" },
  { id: 3, name: "Men - Party Blazer Elegant", description: "An elegant blazer to complete any party outfit.", image: "/images/product_03.jpg", price: 120.00, category: "Men - Party" },
  { id: 4, name: "Men - Party Vest Modern", description: "Modern vest for a sophisticated touch.", image: "/images/product_04.jpg", price: 38.00, category: "Men - Party" },
  { id: 5, name: "Men - Party Shoes Leather", description: "Premium leather shoes for formal gatherings.", image: "/images/product_05.jpg", price: 85.00, category: "Men - Party" },
  { id: 6, name: "Men - Gym Tank Top Breathable", description: "Lightweight and breathable tank top for workouts.", image: "/images/product_06.jpg", price: 22.99, category: "Men - Gym" },
  { id: 7, name: "Men - Gym Shorts Flexi", description: "Flexible shorts designed for maximum movement.", image: "/images/product_07.jpg", price: 35.00, category: "Men - Gym" },
  { id: 8, name: "Men - Gym Hoodie Warmup", description: "Comfortable hoodie for warm-ups and cool-downs.", image: "/images/product_08.jpg", price: 55.00, category: "Men - Gym" },
  { id: 9, name: "Men - Gym Joggers Tapered", description: "Tapered joggers for style and performance.", image: "/images/product_09.jpg", price: 48.00, category: "Men - Gym" },
  { id: 10, name: "Men - Gym Trainers Lightweight", description: "Lightweight trainers for optimal gym performance.", image: "/images/product_10.jpg", price: 99.00, category: "Men - Gym" },

  // --- Female Clothing (Party, Gym, Casual) ---
  { id: 11, name: "Women - Party Dress Sequin", description: "Sparkling sequin dress for a glamorous party night.", image: "/images/product_11.jpg", price: 89.99, category: "Women - Party" },
  { id: 12, name: "Women - Party Skirt Pleated", description: "Flowy pleated skirt perfect for elegant occasions.", image: "/images/product_12.jpg", price: 55.00, category: "Women - Party" },
  { id: 13, name: "Women - Party Top Silky", description: "Silky top for a chic and comfortable party ensemble.", image: "/images/product_13.jpg", price: 40.00, category: "Women - Party" },
  { id: 14, name: "Women - Party Jumpsuit Sleek", description: "Sleek jumpsuit combining style and comfort for parties.", image: "/images/product_14.jpg", price: 75.00, category: "Women - Party" },
  { id: 15, name: "Women - Party Heels Stiletto", description: "High stiletto heels for the ultimate party look.", image: "/images/product_15.jpg", price: 60.00, category: "Women - Party" },
  { id: 16, name: "Women - Gym Leggings High-Waist", description: "High-waisted leggings providing support and style.", image: "/images/product_16.jpg", price: 32.50, category: "Women - Gym" },
  { id: 17, name: "Women - Gym Sports Bra Padded", description: "Padded sports bra for comfort and coverage during workouts.", image: "/images/product_17.jpg", price: 28.00, category: "Women - Gym" },
  { id: 18, name: "Women - Gym Tank Top Cropped", description: "Cropped tank top for a trendy gym look.", image: "/images/product_18.jpg", price: 20.00, category: "Women - Gym" },
  { id: 19, name: "Women - Gym Jacket Lightweight", description: "Lightweight gym jacket for outdoor training.", image: "/images/product_19.jpg", price: 50.00, category: "Women - Gym" },
  { id: 20, name: "Women - Gym Sneakers Mesh", description: "Breathable mesh sneakers for athletic performance.", image: "/images/product_20.jpg", price: 88.00, category: "Women - Gym" },
  { id: 21, name: "Women - Casual Jeans High-Rise", description: "Comfortable high-rise jeans for everyday casual wear.", image: "/images/product_21.jpg", price: 65.00, category: "Women - Casual" },
  { id: 22, name: "Women - Casual Blouse Floral", description: "Floral print blouse perfect for a relaxed day out.", image: "/images/product_22.jpg", price: 35.00, category: "Women - Casual" },
  { id: 23, name: "Women - Casual Dress Midi", description: "Versatile midi dress for casual comfort.", image: "/images/product_23.jpg", price: 50.00, category: "Women - Casual" },
  { id: 24, name: "Women - Casual Cardigan Knit", description: "Soft knit cardigan for layering.", image: "/images/product_24.jpg", price: 42.00, category: "Women - Casual" },
  { id: 25, name: "Women - Casual Flats Comfort", description: "Comfortable flats for all-day casual wear.", image: "/images/product_25.jpg", price: 30.00, category: "Women - Casual" },

  // --- Kids Clothing (Casual & Sport) ---
  { id: 26, name: "Kids - Casual T-shirt Cartoon", description: "Fun cartoon print t-shirt for kids' casual wear.", image: "/images/product_26.jpg", price: 18.00, category: "Kids - Casual" },
  { id: 27, name: "Kids - Casual Shorts Denim", description: "Durable denim shorts for active kids.", image: "/images/product_27.jpg", price: 25.00, category: "Kids - Casual" },
  { id: 28, name: "Kids - Casual Dress Floral", description: "Cute floral dress for little girls.", image: "/images/product_28.jpg", price: 30.00, category: "Kids - Casual" },
  { id: 29, name: "Kids - Casual Hoodie Zipper", description: "Cozy zipper hoodie for cool weather.", image: "/images/product_29.jpg", price: 35.00, category: "Kids - Casual" },
  { id: 30, name: "Kids - Casual Sneakers Velcro", description: "Easy-to-wear Velcro sneakers for kids.", image: "/images/product_30.jpg", price: 40.00, category: "Kids - Casual" },
  { id: 31, name: "Kids - Sport Tracksuit Set", description: "Complete tracksuit set for kids' sports activities.", image: "/images/product_31.jpg", price: 55.00, category: "Kids - Sport" },
  { id: 32, name: "Kids - Sport T-shirt Quick Dry", description: "Quick-dry t-shirt for active play.", image: "/images/product_32.jpg", price: 20.00, category: "Kids - Sport" },
  { id: 33, name: "Kids - Sport Shorts Mesh", description: "Breathable mesh shorts for ultimate comfort.", image: "/images/product_33.jpg", price: 15.00, category: "Kids - Sport" },
  { id: 34, name: "Kids - Sport Jacket Windbreaker", description: "Lightweight windbreaker jacket for outdoor sports.", image: "/images/product_34.jpg", price: 45.00, category: "Kids - Sport" },
  { id: 35, name: "Kids - Sport Swimsuit Boys", description: "Comfortable swimsuit for boys.", image: "/images/product_35.jpg", price: 28.00, category: "Kids - Sport" },
  { id: 36, name: "Kids - Sport Swimsuit Girls", description: "Stylish swimsuit for girls.", image: "/images/product_36.jpg", price: 29.00, category: "Kids - Sport" },
  { id: 37, name: "Men - Party Outfit 11 (Exclusive)", description: "An exclusive men's party outfit.", image: "/images/product_37.jpg", price: 150.00, category: "Men - Party" },
  { id: 38, name: "Women - Gym Set Pro", description: "Professional gym set for women.", image: "/images/product_38.jpg", price: 70.00, category: "Women - Gym" },
  { id: 39, name: "Kids - Casual Polo Shirt", description: "Classic polo shirt for everyday casual wear.", image: "/images/product_39.jpg", price: 25.00, category: "Kids - Casual" },
  { id: 40, name: "Men - Gym Backpack Elite", description: "Elite gym backpack with multiple compartments.", image: "/images/product_40.jpg", price: 60.00, category: "Men - Gym" }
];

export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // This will be the string category name
}


export const  NewArrivalsProduct: Product[] = [

{ id: 1, name: "Men - Party Shirt Slim Fit", description: "A sleek, slim-fit shirt perfect for parties.", image: "/images/product_01.jpg", price: 45.99, category: "Men - Party" },
{ id: 26, name: "Kids - Casual T-shirt Cartoon", description: "Fun cartoon print t-shirt for kids' casual wear.", image: "/images/product_26.jpg", price: 18.00, category: "Kids - Casual" },
{ id: 40, name: "Men - Gym Backpack Elite", description: "Elite gym backpack with multiple compartments.", image: "/images/product_40.jpg", price: 60.00, category: "Men - Gym" },
{ id: 6, name: "Men - Gym Tank Top Breathable", description: "Lightweight and breathable tank top for workouts.", image: "/images/product_06.jpg", price: 22.99, category: "Men - Gym" },

]

export const  TopSelling: Products[] = [
  { id: 36, name: "Kids - Sport Swimsuit Girls", description: "Stylish swimsuit for girls.", image: "/images/product_36.jpg", price: 29.00, category: "Kids - Sport" },
  { id: 25, name: "Women - Casual Flats Comfort", description: "Comfortable flats for all-day casual wear.", image: "/images/product_25.jpg", price: 30.00, category: "Women - Casual" },
  { id: 29, name: "Kids - Casual Hoodie Zipper", description: "Cozy zipper hoodie for cool weather.", image: "/images/product_29.jpg", price: 35.00, category: "Kids - Casual" },
  { id: 4, name: "Men - Party Vest Modern", description: "Modern vest for a sophisticated touch.", image: "/images/product_04.jpg", price: 38.00, category: "Men - Party" },


]