import {faker} from "@faker-js/faker"

const PRODUCT_LENGTH = 50;

export const ProductList = Array.from({length:PRODUCT_LENGTH} , ()=>({
    id:faker.string.uuid(),
    title:faker.commerce.productName(),
    description:faker.commerce.productDescription(),
    category:faker.commerce.productAdjective(),
    imageURL:faker.image.url(),
    price:faker.commerce.price(),
}))