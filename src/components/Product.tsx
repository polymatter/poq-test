export interface ProductDetails {
    productId: number;
    name: string;
    description: string;
    price: number;
    priceWas: number;
    available: boolean;
    quantity: number;
    lowOnStock: boolean;
    promotionBadge: string;
    imageUrl: string;
}

type StringyBool = "TRUE" | "FALSE"

export interface ProductDetailsRaw {
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

export function convertFromRaw(raw : ProductDetailsRaw): ProductDetails {
    const result = {
        ...raw, 
        lowOnStock: raw.lowOnStock === "TRUE", 
        available: raw.available === "TRUE" && raw.quantity > 0
    }
    return result;
}

const currencySymbol = `£`;

const Product = (product: ProductDetails) => {
    return (
        <section className="product">
            <img className="product-image"
                src={`${product.imageUrl}`}
                alt={`image of ${product.productId}`}/>
            <div className="product-promotionBadge">{product.promotionBadge}</div>
            <div className="product-name">{product.name}</div>
            <span className="product-price">{`${currencySymbol} ${product.price}`}</span>
            <span className="product-priceWas">{`${currencySymbol} ${product.priceWas}`}</span>
        </section>
    )
}

export default Product
