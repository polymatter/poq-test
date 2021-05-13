import React from 'react'

type StringyBool = "TRUE" | "FALSE"

export interface ProductDetails {
    productId: number;
    name: string;
    description: string;
    price: number;
    priceWas: number;
    available: StringyBool;
    quantity: number;
    lowOnStock: StringyBool;
    promotionBadge: string;
    imageUrl: string;
}

const Product = (product: ProductDetails) => {
    return (
        <section className="product">
            <img className="product-image"
                src={`${product.imageUrl}`}
                alt={`image of ${product.name}`}/>
        </section>
    )
}

export default Product
