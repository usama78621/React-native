const burger_restaurant_1 = require('../asserts/honey-mustard-chicken-burger.jpg')
const kolo = require('../asserts/kolo-mee.jpg')
const nasi_briyani = require('../asserts/nasi-briyani-mutton (1).jpg')
const nasi_briyani_mutton = require('../asserts/nasi-briyani-mutton.jpg')
const pizza2 = require('../asserts/pizza-restaurant.jpg')
const tomato = require('../asserts/tomato-pasta.jpg')
const Tec = require('../asserts/teh-c-peng.jpg')


const affordable = 1
const expensive = 3
export const restaurantData = [
    {
        id: 1,
        name: "ByProgrammers Burger",
        rating: 4.8,
        categories: [5, 7],
        priceRating: affordable,
        photo: burger_restaurant_1,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },

    },
    {
        id: 2,
        name: "ByProgrammers Pizza",
        rating: 4.8,
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: nasi_briyani_mutton,
        duration: "15 - 20 min",
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
        photo: Tec,
        duration: "20 - 25 min",
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
        photo: pizza2,
        duration: "10 - 15 min",
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
        priceRating: expensive,
        photo: kolo,
        duration: "15 - 20 min",
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
        photo: Tec,
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

    }, {
        id: 7,
        name: "ByProgrammers Tomato",
        rating: 4.8,
        categories: [1, 2],
        priceRating: expensive,
        photo: tomato,
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },

    },

]