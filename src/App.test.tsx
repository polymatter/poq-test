import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

const apiresult = [
  {
    "productId": 100024698,
    "name": "Rose Gold Shimmer Clutch Bag",
    "description": "• Shimmer finish\n• Pleat design\n• Magnetic closure\n• Inner pocket\n• Detachable chain strap",
    "price": 9.09,
    "priceWas": 12.99,
    "available": "TRUE",
    "quantity": 96,
    "lowOnStock": "FALSE",
    "promotionBadge": "30% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024698_XM?w=1024"
  },
  {
    "productId": 100024699,
    "name": "Blue Jewel Clutch Bag",
    "description": "• Jewel finish\n• Silver colour frame\n• Clip closure\n• Detachable chain strap\n• Synthetic",
    "price": 9.99,
    "priceWas": 18.99,
    "available": "TRUE",
    "quantity": 3,
    "lowOnStock": "FALSE",
    "promotionBadge": "47% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024699_XM?w=1024"
  },
  {
    "productId": 100024700,
    "name": "White Quilted Bag",
    "description": "• Quilted effect\n• Chain strap\n• Magnetic closure\n• Inner zip closure\n• Synthetic",
    "price": 9.99,
    "priceWas": 22.99,
    "available": "FALSE",
    "quantity": 0,
    "lowOnStock": "TRUE",
    "promotionBadge": "57% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024700_XM?w=1024"
  },
  {
    "productId": 100024701,
    "name": "White Small Flower Fascinator",
    "description": "• Perfect for weddings or a day at the races\n• Mesh material\n• Flower detail \n• Glitter finish\n• Synthetic",
    "price": 7.99,
    "priceWas": 9.99,
    "available": "TRUE",
    "quantity": 86,
    "lowOnStock": "FALSE",
    "promotionBadge": "20% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024701_XM?w=1024"
  },
  {
    "productId": 100024702,
    "name": "Black Small Flower Fascinator",
    "description": "• Perfect for weddings or a day at the races\n• Mesh material\n• Flower detail \n• Glitter finish\n• Synthetic",
    "price": 7.99,
    "priceWas": 9.99,
    "available": "TRUE",
    "quantity": 123,
    "lowOnStock": "FALSE",
    "promotionBadge": "20% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024702_XM?w=1024"
  },
  {
    "productId": 100024703,
    "name": "Nude Quilted Bag",
    "description": "• Quilted effect\n• Chain strap\n• Magnetic closure\n• Inner zip closure\n• Synthetic",
    "price": 9.99,
    "priceWas": 22.99,
    "available": "FALSE",
    "quantity": 0,
    "lowOnStock": "TRUE",
    "promotionBadge": "57% OFF",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024703_XM?w=1024"
  },
  {
    "productId": 100024761,
    "name": "Stone Six Button Tailored Blazer Jacket",
    "description": "• Tailored \n• Double breasted blazer\n• Woven style\n• Six button detail\n• Shawl lapel\n• Matching trousers available\n• Length 79 cm approx\n• 95% Polyester, 5% Elastane\n• Model Height: 5' 8\n• Model wears UK 8 / US 4 / EUR 36• Take care of your clothes\n• Follow the instructions before you wash it",
    "price": 18.49,
    "priceWas": 36.99,
    "available": "TRUE",
    "quantity": 0,
    "lowOnStock": "TRUE",
    "promotionBadge": "",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024761_XM?w=1024"
  },
  {
    "productId": 100024686,
    "name": "Cream Puff Sleeve Cropped Jacket",
    "description": "• The perfect companion!\n• Cropped jacket\n• Puff sleeve\n• Shawl collar\n• 3/4 sleeve\n• Length: 40cm approx\n• 95% Polyester, 5% Elastane\n• Model height: 5' 8\n• Model wears UK 8 / EUR 36 / US 4• Avoid post-wash regrets\n• Always check the label",
    "price": 8.99,
    "priceWas": 17.99,
    "available": "TRUE",
    "quantity": 1,
    "lowOnStock": "TRUE",
    "promotionBadge": "",
    "imageUrl": "https://i8.amplience.net/i/Quiz/00100024686_XM?w=1024"
  }
]

it(`renders the image of the first product`, async () => {
  const mockFetch = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(apiresult)
    }) as Promise<Response>
  );

  await act(async () => {
    render(<App />)
  });

  const img = screen.getByAltText(`image of ${apiresult[0].productId}`) as HTMLImageElement;
  expect(img.src).toBe(apiresult[0].imageUrl);

  mockFetch.mockRestore();
});

it(`renders the image of the all products`, async () => {
  const mockFetch = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(apiresult)
    }) as Promise<Response>
  );

  await act(async () => {
    render(<App />)
  });

  apiresult.forEach(product => {
    const img = screen.getByAltText(`image of ${product.productId}`) as HTMLImageElement;
    expect(img.src).toBe(product.imageUrl);
  })

  mockFetch.mockRestore();
});

