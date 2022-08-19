const avatar_1 = require("../asserts/assets/images/avatar-1.jpg");
const avatar_2 = require("../asserts/assets/images/avatar-2.jpg");
const avatar_3 = require("../asserts/assets/images/avatar-3.jpg");
const avatar_4 = require("../asserts/assets/images/avatar-4.jpg");
const avatar_5 = require("../asserts/assets/images/avatar-5.jpg");
const baked_fries = require("../asserts/assets/images/baked-fries.jpg");
const burger_restaurant_1 = require("../asserts/assets/images/burger-restaurant.jpg");
const burger_restaurant_2 = require("../asserts/assets/images/burger-restaurant-2.jpg");
const chicago_hot_dog = require("../asserts/assets/images/chicago-hot-dog.jpg");
const crispy_chicken_burger = require("../asserts/assets/images/crispy-chicken-burger.jpg");
const fries_restaurant = require("../asserts/assets/images/fries-restaurant.jpg");
const hawaiian_pizza = require("../asserts/assets/images/hawaiian-pizza.jpg");
const honey_mustard_chicken_burger = require("../asserts/assets/images/honey-mustard-chicken-burger.jpg");
const hot_dog_restaurant = require("../asserts/assets/images/hot-dog-restaurant.jpg");
const ice_kacang = require("../asserts/assets/images/ice-kacang.jpg");
const japanese_restaurant = require("../asserts/assets/images/japanese-restaurant.jpg");
const kek_lapis_shop = require("../asserts/assets/images/kek-lapis-shop.jpg");
const kek_lapis = require("../asserts/assets/images/kek-lapis.jpg");
const kolo_mee = require("../asserts/assets/images/kolo-mee.jpg");
const nasi_briyani_mutton = require("../asserts/assets/images/nasi-briyani-mutton.jpg");
const nasi_lemak = require("../asserts/assets/images/nasi-lemak.jpg");
const noodle_shop = require("../asserts/assets/images/noodle-shop.jpg");
const pizza_restaurant = require("../asserts/assets/images/pizza-restaurant.jpg");
const pizza = require("../asserts/assets/images/pizza.jpg");
const salad = require("../asserts/assets/images/salad.jpg");
const sarawak_laksa = require("../asserts/assets/images/sarawak-laksa.jpg");
const sushi = require("../asserts/assets/images/sushi.jpg");
const teh_c_peng = require("../asserts/assets/images/teh-c-peng.jpg");
const tomato_pasta = require("../asserts/assets/images/tomato-pasta.jpg");

const affordable = 1
const fairPrice = 2
const expensive = 3
export const restaurantData = [
    {
        id: 1,
        name: "Crispy Chicken Burger",
        rating: 4.8,
        categories: [5, 7],
        priceRating: affordable,
        photo: [burger_restaurant_1, honey_mustard_chicken_burger, baked_fries],
        description: "Burger with crispy chicken, cheese and lettuce",
        calories: 200,
        price: 10,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
    },

    {
        id: 2,
        name: "Hawaiian Pizza",
        rating: 4.8,
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: [hawaiian_pizza, tomato_pasta, pizza],
        duration: "15 - 20 min",
        description: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories: 250,
        price: 15,
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
    },
    {
        id: 3,
        name: "ByProgrammers Hotdogs",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: [chicago_hot_dog, chicago_hot_dog],
        duration: "20 - 25 min",
        description: "Fresh tomatoes, all beef hot dogs",
        calories: 100,
        price: 20,
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
    },
    {
        id: 4,
        name: "ByProgrammers Sushi",
        rating: 4.8,
        categories: [8],
        priceRating: expensive,
        photo: [sushi, japanese_restaurant],
        duration: "10 - 15 min",
        description: "Fresh salmon, sushi rice, fresh juicy avocado",
        calories: 100,
        price: 50,
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
    },
    {
        id: 5,
        name: "ByProgrammers Cuisine",
        rating: 4.8,
        categories: [1, 2],
        priceRating: affordable,
        photo: [kolo_mee, sarawak_laksa, nasi_lemak, nasi_briyani_mutton],
        duration: "15 - 20 min",
        description: "Vermicelli noodles, cooked prawns",
        calories: 300,
        price: 8,
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
    },
    {

        id: 6,
        name: "ByProgrammers Dessets",
        rating: 4.9,
        categories: [9, 10],
        priceRating: affordable,
        photo: [kek_lapis_shop, teh_c_peng, ice_kacang, kek_lapis],
        description: "Three Layer Teh C Peng",
        calories: 100,
        price: 2,
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
    }
]