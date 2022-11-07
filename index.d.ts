type Category = {
    id: number;
    description: string;
    name: string;
  };
  
  type Product = {
    id: number;
    supplierId: number;
    categoryId: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: boolean;
    name: string;
    category?: Category;
  };
  
  type BasketItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }
  
  type Basket = {
    items: BasketItem[];
    total: number;
  };
  