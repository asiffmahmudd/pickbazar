import lime from '../img/GreenLimes_jrodle.jpg';
import lemon from '../img/Yellow_Limes_y0lbyo.jpg';
import apples from '../img/apples.jpg';
import dates from '../img/dates.jpg';
import carrot from '../img/carrots.jpg';
import cucumber from '../img/cucumber.jpg';
import blueberry from '../img/blueberry.jpg';
import strawberry from '../img/strawberry.jpg';
import mango from '../img/mango.jpg';
import pepper from '../img/pepper.jpg';
import cherry from '../img/cherry.jpg';
import pears from '../img/pears.jpg';


const orders = [
    {
        id:1,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 99.10,
        paymentMethod: "Cash On Delivery",
        contact:"715-371-3507",
        status:"delivered",
        products: [
            {
                id:2,
                img: lemon,
                name: "Lemon",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 2.2,
                count: 2
              },
              {
                id:3,
                img: apples,
                name: "Apples",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 3.2,
                count: 1
              },
              {
                id:4,
                img: dates,
                name: "Dates",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 4.0,
                count: 3
              },
        ]
    },
    {
        id:2,
        customerId:"2",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 322,
        paymentMethod:"Cash On Delivery",
        contact:"234-371-3507",
        status:"delivered",
        products: [
            {
                id:5,
                img: carrot,
                name: "Carrot",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 5.0,
                count: 1
              },
              {
                id:6,
                img: cucumber,
                name: "Cucmber",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 6.3,
                count: 2
              },
        ]
    },
    {
        id:3,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 643,
        paymentMethod:"Cash On Delivery",
        contact:"534-456-3507",
        status:"processing",
        products: [
            {
                id:8,
                img: blueberry,
                name: "Blueberry",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 8.6,
                count: 4
              },
        ]
    },
    {
        id:4,
        customerId:"2",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 210,
        paymentMethod:"Cash On Delivery",
        contact:"978-234-3507",
        status:"pending",
        products: [
            {
                id:10,
                img: mango,
                name: "Mango",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 10.4,
                count: 3
              },
              {
                id:11,
                img: pepper,
                name: "Pepper",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 9.99,
                count: 1
              },
        ]
    },
    {
        id:5,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 110.89,
        paymentMethod:"Cash On Delivery",
        contact:"624-987-9805",
        status:"delivered",
        products: [
            {
                id:10,
                img: mango,
                name: "Mango",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 10.4,
                count: 6
              },
              {
                id:11,
                img: pepper,
                name: "Pepper",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 9.99,
                count: 1
              },
              {
                id:12,
                img: pears,
                name: "Pears",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 2.99,
                count: 2
              },
        ]
    },
    {
        id:6,
        customerId:"3",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 756.30,
        paymentMethod:"Cash On Delivery",
        contact:"234-676-9076",
        status:"processing",
        products: [
            {
                id:6,
                img: cucumber,
                name: "Cucmber",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 6.3,
                count: 2
              },
              {
                id:7,
                img: cherry,
                name: "Cherry",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 9.1,
                count: 2
              },
              {
                id:8,
                img: blueberry,
                name: "Blueberry",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 8.6,
                count: 2
              },
              {
                id:9,
                img: strawberry,
                name: "Strawberry",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 11,
                count: 5
              },
        ]
    },
    {
        id:7,
        customerId:"3",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 299.99,
        paymentMethod:"Cash On Delivery",
        contact:"980-567-4353",
        status:"pending",
        products: [
            {
                id:4,
                img: dates,
                name: "Dates",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 4.0,
                count: 1
              },
        ]

    },
    {
        id:8,
        customerId:"4",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 657,
        paymentMethod:"Cash On Delivery",
        contact:"123-435-6780",
        status:"failed",
        products: [
            {
                id:1,
                img: lime,
                name: "Lime",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 1.2,
                count: 1
              },
        ]
    },
    {
        id:9,
        customerId:"5",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 512,
        paymentMethod:"Cash On Delivery",
        contact:"965-345-123",
        status:"pending",
        products: [
            {
                id:2,
                img: lemon,
                name: "Lemon",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 2.2,
                count: 4
              },
              {
                id:3,
                img: apples,
                name: "Apples",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 3.2,
                count: 7
              },
        ]
    },
    {
        id:10,
        customerId:"6",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 249.7,
        paymentMethod:"Cash On Delivery",
        contact:"567-353-5434",
        status:"failed",
        products: [
            {
                id:2,
                img: lemon,
                name: "Lemon",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "vegetables",
                tags: ['fruits', 'vegetables'],
                price: 2.2,
                count: 1
              },
              {
                id:3,
                img: apples,
                name: "Apples",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 3.2,
                count: 1
              },
              {
                id:4,
                img: dates,
                name: "Dates",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mollis lectus. Nulla in efficitur libero, vel maximus quam. Duis feugiat vulputate sem eget efficitur.",
                unit:'lb',
                sale:1.0,
                discount:0,
                quantity:100,
                type: "fruits",
                tags: ['fruits', 'vegetables'],
                price: 4.0,
                count: 3
              },
        ]
    },
]

export default orders;