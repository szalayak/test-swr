import { NextApiRequest, NextApiResponse } from "next";

export const basket : Basket = {
  items: [],
  total: 0
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const product = JSON.parse(req.body) as BasketItem;
    const existingItem = basket.items.find(({id}) => id === product.id);
    if (existingItem) {
        existingItem.quantity += product.quantity;
        existingItem.price += (product.quantity + product.price);
    } else {
        basket.items.push(product);
    }
    basket.total = basket.items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0)
    return res.status(201).json(basket);
  } else {
    return res.status(200).json(basket);
  }
}
