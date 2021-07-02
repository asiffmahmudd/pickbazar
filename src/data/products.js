import lime from '../img/GreenLimes_jrodle.png';
import lemon from '../img/Yellow_Limes_y0lbyo.png';
import apples from '../img/apples.png';
import dates from '../img/dates.png';
import carrot from '../img/carrots.png';
import cucumber from '../img/cucumber.png';
import blueberry from '../img/blueberry.png';
import strawberry from '../img/strawberry.png';
import mango from '../img/mango.png';
import pepper from '../img/pepper.png';
import cherry from '../img/cherry.png';
import pears from '../img/pears.png';
import salmon from '../img/salmon.png';
import cod from '../img/cod fillet.png';
import swordfish from '../img/swordfish.png';
import beef from '../img/beef.png';
import chicken from '../img/chicken breast.png';
import beefsteak from '../img/beef steak.png';
import belmont from '../img/belmont_custard_cream.png';
import crawford from '../img/crawford_digestives.png';
import crawford2 from '../img/crawford_shortie.png';
import dairymilk from '../img/cadbury-dairy-milk-reclose.png';
import avo from '../img/grain_free.png';
import hills from '../img/hills_science_diet.png';
import instinct from '../img/instinct_the_raw.png';
import air1 from '../img/air_freshner_acana_ozmo.png';
import air2 from '../img/air_freshner_air_wick_essential_oils.png';
import air3 from '../img/air_freshner_ambipur_air_sweet_citrus&zest.png';
import air4 from '../img/air_freshner_boardwalk_mango.png';
import butter1 from '../img/butter_barney.png';
import butter2 from '../img/butter_kirkland.png';
import butter3 from '../img/butter_nikkis.png';
import egg1 from '../img/egg_cp.png';
import egg2 from '../img/egg_gold_hen.png';
import oil1 from '../img/oil_1_2_3_vegitable.png';
import oil2 from '../img/oil_clover_valley.png';
import oil3 from '../img/oil_daisy.png';
import oil4 from '../img/oil_eva.png';
import bread1 from '../img/best_taste_Bread_garry.png';
import bread2 from '../img/Everyday_Essentials_Wholemeal_Bread.png';
import flakes1 from '../img/fibre1_crunchy_original.png';
import milk from '../img/milk_arla_lacto_free.png';
import flakes2 from '../img/nestle_made_with_whole_grain_corn_flakes.png';
import coke from '../img/Coca_Cola_200ml_Bottle.png';
import juice from '../img/iceland_tropical_juice_drink.png';
import redbull from '../img/red_bull.png';
import coffee from '../img/teeccino_herbal_coffee_alternative_almond_amaretto.png';
import babyshampoo from '../img/aveeno_baby_shampoo.png';
import lotion from '../img/eo_body_lotion.png';


const products = [
    {
      id:1,
      img: [lime,lime,lime,lime],
      name: "Lime",
      desc: "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      unit:'lb',
      sale:1.08,
      discount:10,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 1.2
    },
    {
      id:2,
      img: [lemon],
      name: "Lemon",
      desc: "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 2.2
    },
    {
      id:3,
      img: [apples],
      name: "Apples",
      desc: "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 3.2
    },
    {
      id:4,
      img: [dates],
      name: "Dates",
      desc: "Phoenix dactylifera, commonly known as date or date palm, is a flowering plant species in the palm family, Arecaceae, cultivated for its edible sweet fruit.",
      unit:'lb',
      sale:2,
      discount:50,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 4
    },
    {
      id:5,
      img: [carrot],
      name: "Carrot",
      desc: "The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.",
      unit:'lb',
      sale:4.5,
      discount:10,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}, {name:'vegetables'}],
      price: 5.0
    },
    {
      id:6,
      img: [cucumber],
      name: "Cucmber",
      desc: "Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}, {name:'vegetables'}],
      price: 6.3
    },
    {
      id:7,
      img: [cherry],
      name: "Cherry",
      desc: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 9.1
    },
    {
      id:8,
      img: [blueberry],
      name: "Blueberry",
      desc: "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries. Commercial blueberries—both wild and cultivated —are all native to North America.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 8.6
    },
    {
      id:9,
      img: [strawberry],
      name: "Strawberry",
      desc: "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 11
    },
    {
      id:10,
      img: [mango],
      name: "Mango",
      desc: "A mango is a juicy stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 10.4
    },
    {
      id:11,
      img: [pepper],
      name: "Pepper",
      desc: "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, it is about 5 mm in diameter and dark red, and contains a single seed, like all drupes",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}, {name:'vegetables'}],
      price: 9.99
    },
    {
      id:12,
      img: [pears],
      name: "Pears",
      desc: "The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Fruits & Vegetables",
      tags: [{name:'fruits'}],
      price: 2.99
    },
    {
      id:13,
      img: [salmon],
      name: "Signature Salmon",
      desc: "Salmon is a common food classified as an oily fish with a rich content of protein and omega-3 fatty acids",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'fish'}, {name:'fresh fish'}],
      price: 4.95
    },
    {
      id:14,
      img: [cod],
      name: "Cod Fillet",
      desc: "Cod is the common name for the demersal fish genus Gadus, belonging to the family Gadidae. Cod is also used as part of the common name for a number of other fish species, and some species suggested to belong to genus Gadus are not called cod.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'fish'}, {name:'fresh fish'}],
      price: 7.95
    },
    {
      id:15,
      img: [swordfish],
      name: "Swordfish Fillet",
      desc: "The swordfish meat has a very delicate flavour, meaty and mild. Swordfish, also known as broadbills, is an oily fish similar to tuna, chunky meat without bones.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'fish'}, {name:'fresh fish'}],
      price: 8.5
    },
    {
      id:16,
      img: [beef],
      name: "Fresh Beef",
      desc: "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      unit:'lb',
      sale:4.8,
      discount:20,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'meat'}, {name:'beef'}],
      price: 6
    },
    {
      id:17,
      img: [chicken],
      name: "Chicken Breast",
      desc: "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      unit:'lb',
      sale:9,
      discount:10,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'chicken'}, {name:'fresh chicken'}],
      price: 10
    },
    {
      id:16,
      img: [beefsteak],
      name: "Steak Beef",
      desc: "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      unit:'lb',
      sale:16,
      discount:20,
      quantity:100,
      category: "Meat & Fish",
      tags: [{name:'meat'}, {name:'beef'}],
      price: 20.00
    },
    {
      id:18,
      img:[belmont],
      name: "Belmont Custard Cream",
      desc: "A biscuit is a flour-based baked food product. This article covers the type of biscuit found in Africa, Asia, and Europe, which is typically hard, flat, and unleavened.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Snacks",
      tags: [{name:'snacks'}, {name:'biscuit'}],
      price: 4.5
    },

    {
      id:19,
      img:[crawford],
      name: "Crawford Digestives",
      desc: "A biscuit is a flour-based baked food product. This article covers the type of biscuit found in Africa, Asia, and Europe, which is typically hard, flat, and unleavened.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Snacks",
      tags: [{name:'snacks'}, {name:'biscuit'}],
      price: 6.4
    },
    {
      id:20,
      img:[crawford2],
      name: "Crawford Shortie",
      desc: "A biscuit is a flour-based baked food product. This article covers the type of biscuit found in Africa, Asia, and Europe, which is typically hard, flat, and unleavened.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Snacks",
      tags: [{name:'snacks'}, {name:'biscuit'}],
      price: 5
    },
    {
      id:21,
      img:[dairymilk],
      name: "Dairy Milk Reclose",
      desc: "Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Snacks",
      tags: [{name:'snacks'}, {name:'chocolate'}],
      price: 3.5
    },
    
    {
      id:22,
      img:[avo],
      name: "Avo Derm Grain Free",
      desc: "Cat food is food specifically formulated and intended for consumption by cats and other related canines. Like all carnivores, cats have sharp, pointed teeth, and have short gastrointestinal tracts better suited for the consumption of meat than of vegetable substances.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Pet Care",
      tags: [{name:'pet care'}, {name:'cat food'}],
      price: 27
    },
    {
      id:23,
      img:[hills],
      name: "Hills Science Diet",
      desc: "Cat food is food specifically formulated and intended for consumption by cats and other related canines. Like all carnivores, cats have sharp, pointed teeth, and have short gastrointestinal tracts better suited for the consumption of meat than of vegetable substances.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Pet Care",
      tags: [{name:'pet care'}, {name:'cat food'}],
      price: 25
    },
    {
      id:24,
      img:[instinct],
      name: "Instinct Ultimate Protien",
      desc: "Dog food is food specifically formulated and intended for consumption by dogs and other related canines. Like all carnivores, dogs have sharp, pointed teeth, and have short gastrointestinal tracts better suited for the consumption of meat than of vegetable substances.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Pet Care",
      tags: [{name:'pet care'}, {name:'dog food'}],
      price: 27
    },
    {
      id:25,
      img:[air1],
      name: "Ozmo Air Fabric Freshner",
      desc: "Air fresheners are consumer products that typically emit fragrance and are used in homes or commercial interiors such as restrooms, foyers, hallways, vestibules and other smaller indoor areas, as well as larger areas such as hotel lobbies, auto dealerships, medical facilities, public arenas and other large interior spaces.",
      unit:'lb',
      sale:12.75,
      discount:10,
      quantity:100,
      category: "Home & Cleaning",
      tags: [{name:'home'}, {name:'cleaning'}],
      price: 15
    },
    {
      id:26,
      img:[air2],
      name: "Air Wick Essential Oils",
      desc: "Air fresheners are consumer products that typically emit fragrance and are used in homes or commercial interiors such as restrooms, foyers, hallways, vestibules and other smaller indoor areas, as well as larger areas such as hotel lobbies, auto dealerships, medical facilities, public arenas and other large interior spaces.",
      unit:'lb',
      sale:18,
      discount:10,
      quantity:100,
      category: "Home & Cleaning",
      tags: [{name:'home'}, {name:'cleaning'}],
      price: 20
    },
    {
      id:27,
      img:[air3],
      name: "Ambi Pur Air",
      desc: "Air fresheners are consumer products that typically emit fragrance and are used in homes or commercial interiors such as restrooms, foyers, hallways, vestibules and other smaller indoor areas, as well as larger areas such as hotel lobbies, auto dealerships, medical facilities, public arenas and other large interior spaces.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Home & Cleaning",
      tags: [{name:'home'}, {name:'cleaning'}],
      price: 15
    },
    {
      id:28,
      img:[air4],
      name: "Broadwalk Air Freshner",
      desc: "Air fresheners are consumer products that typically emit fragrance and are used in homes or commercial interiors such as restrooms, foyers, hallways, vestibules and other smaller indoor areas, as well as larger areas such as hotel lobbies, auto dealerships, medical facilities, public arenas and other large interior spaces.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Home & Cleaning",
      tags: [{name:'home'}, {name:'cleaning'}],
      price: 15
    },
    {
      id:29,
      img:[butter1],
      name: "Barney Butter",
      desc: "Butter is a dairy product with high butterfat content which is solid when chilled and at room temperature in some regions, and liquid when warmed. It is made by churning fresh or fermented cream or milk to separate the butterfat from the buttermilk.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Dairy",
      tags: [{name:'butter'}],
      price: 8
    },
    {
      id:30,
      img:[butter2],
      name: "Kirkland Signature",
      desc: "Butter is a dairy product with high butterfat content which is solid when chilled and at room temperature in some regions, and liquid when warmed. It is made by churning fresh or fermented cream or milk to separate the butterfat from the buttermilk.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Dairy",
      tags: [{name:'butter'}],
      price: 8.1
    },
    {
      id:31,
      img:[butter3],
      name: "Nikki S Coconut Butter",
      desc: "Butter is a dairy product with high butterfat content which is solid when chilled and at room temperature in some regions, and liquid when warmed. It is made by churning fresh or fermented cream or milk to separate the butterfat from the buttermilk.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Dairy",
      tags: [{name:'butter'}],
      price: 8.6
    },
    {
      id:32,
      img:[egg1],
      name: "Cp Omega",
      desc: "The egg is the organic vessel containing the zygote in which an embryo develops until it can survive on its own, at which point the animal hatches. An egg results from fertilization of an egg cell. Most arthropods, vertebrates (excluding mammals), and mollusks lay eggs, although some, such as scorpions, do not.",
      unit:'lb',
      sale:0.0,
      discount:0,
      quantity:100,
      category: "Dairy",
      tags: [{name:'egg'}],
      price: 2
    },
    {
      id:33,
      img:[egg2],
      name: "Freshlay Golden Yolks",
      desc: "The egg is the organic vessel containing the zygote in which an embryo develops until it can survive on its own, at which point the animal hatches. An egg results from fertilization of an egg cell. Most arthropods, vertebrates (excluding mammals), and mollusks lay eggs, although some, such as scorpions, do not.",
      unit:'lb',
      sale:3.8,
      discount:5,
      quantity:100,
      category: "Dairy",
      tags: [{name:'egg'}],
      price: 4
    },
    {
      id:34,
      img:[milk],
      name: "Arla Lacto Free Semi Skimmed Milk",
      desc: "Milk is a nutrient-rich, white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who are breastfed) before they are able to digest other types of food.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Dairy",
      tags: [{name:'milk'}],
      price: 3.6
    },
    {
      id:35,
      img:[oil1],
      name: "1 2 3 Vegetable Oil",
      desc: "An oil is any nonpolar chemical substance that is a viscous liquid at ambient temperatures and is both hydrophobic (does not mix with water, literally water fearing) and lipophilic (mixes with other oils, literally fat loving). Oils have a high carbon and hydrogen content and are usually flammable and surface active.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Cooking",
      tags: [{name:'oil'}],
      price: 4
    },
    {
      id:36,
      img:[oil2],
      name: "Clover Valley Vegetable Oil",
      desc: "An oil is any nonpolar chemical substance that is a viscous liquid at ambient temperatures and is both hydrophobic (does not mix with water, literally water fearing) and lipophilic (mixes with other oils, literally fat loving). Oils have a high carbon and hydrogen content and are usually flammable and surface active.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Cooking",
      tags: [{name:'oil'}],
      price: 6.4
    },
    {
      id:37,
      img:[oil3],
      name: "Daisy Corn Oil",
      desc: "An oil is any nonpolar chemical substance that is a viscous liquid at ambient temperatures and is both hydrophobic (does not mix with water, literally water fearing) and lipophilic (mixes with other oils, literally fat loving). Oils have a high carbon and hydrogen content and are usually flammable and surface active.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Cooking",
      tags: [{name:'oil'}],
      price: 8
    },
    {
      id:38,
      img:[oil4],
      name: "Eva Corn Oil",
      desc: "An oil is any nonpolar chemical substance that is a viscous liquid at ambient temperatures and is both hydrophobic (does not mix with water, literally water fearing) and lipophilic (mixes with other oils, literally fat loving). Oils have a high carbon and hydrogen content and are usually flammable and surface active.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Cooking",
      tags: [{name:'oil'}],
      price: 4
    },

    {
      id:39,
      img:[bread1],
      name: "Garry Best Taste Bread",
      desc: "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world and is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture.",
      unit:'lb',
      sale:3.8,
      discount:10,
      quantity:100,
      category: "Breakfast",
      tags: [{name:'bread'}],
      price: 4
    },
    {
      id:40,
      img:[bread2],
      name: "Everyday Essentials Wholemeal Bread",
      desc: "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world and is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Breakfast",
      tags: [{name:'bread'}],
      price: 6
    },
    {
      id:41,
      img:[flakes1],
      name: "Fibre 1 Crunchy Original",
      desc: "A cereal is any grass cultivated for the edible components of its grain, composed of the endosperm, germ, and bran. The term may also refer to the resulting grain itself.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Breakfast",
      tags: [{name:'cereal'}],
      price: 3.2
    },
    {
      id:42,
      img:[flakes2],
      name: "Nestle Corn Flakes",
      desc: "A cereal is any grass cultivated for the edible components of its grain, composed of the endosperm, germ, and bran. The term may also refer to the resulting grain itself.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Breakfast",
      tags: [{name:'cereal'}],
      price: 5.7
    },
    {
      id:43,
      img:[coffee],
      name: "Teeccino Herbal Coffee Alternative",
      desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Beverage",
      tags: [{name:'coffee'}],
      price: 3
    },
    {
      id:44,
      img:[redbull],
      name: "Red Bull Energy Drink",
      desc: "An energy drink is a type of drink containing sugar and stimulant compounds, usually caffeine, which is marketed as providing mental and physical stimulation (marketed as energy, but distinct from food energy).",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Beverage",
      tags: [{name:'energy drinks'}],
      price: 2.2
    },
    {
      id:45,
      img:[juice],
      name: "Iceland Tropical Juice Drink",
      desc: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Beverage",
      tags: [{name:'juice'}],
      price: 1.5
    },
    {
      id:46,
      img:[coke],
      name: "Coca Cola Botle",
      desc: "A soft drink is a drink that usually contains carbonated water, a sweetener, and a natural or artificial flavoring. The sweetener may be a sugar, high-fructose corn syrup, fruit juice, a sugar substitute, or some combination of these.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Beverage",
      tags: [{name:'fizzy drinks'}],
      price: 1
    },
    
    {
      id:47,
      img:[babyshampoo],
      name: "Aveeno Baby Shampoo",
      desc: "Bath gel is a specialized liquid product used for cleaning the body during baths. Not to be confused with liquid soaps, bath gels, in fact, do not contain saponified oil. Instead, it uses synthetic detergents derived from either petroleum or plant sources.",
      unit:'lb',
      sale:14,
      discount:30,
      quantity:100,
      category: "Beauty & Health",
      tags: [{name:'bath'}],
      price: 20
    },
    {
      id:48,
      img:[lotion],
      name: "Eo Body Lotion",
      desc: "Bath gel is a specialized liquid product used for cleaning the body during baths. Not to be confused with liquid soaps, bath gels, in fact, do not contain saponified oil. Instead, it uses synthetic detergents derived from either petroleum or plant sources.",
      unit:'lb',
      sale:0,
      discount:0,
      quantity:100,
      category: "Beauty & Health",
      tags: [{name:'bath'}],
      price: 16
    },
  ]

export default products;