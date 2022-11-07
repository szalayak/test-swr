import useSWR, { useSWRConfig } from "swr";

export const fetcher = (...args: any) => fetch(args).then(res => res.json());

export const getCategoriesFromApi = async () => {
  return (await fetcher(
    "https://northwind.vercel.app/api/categories"
  )) as Category[];
};

export const getProductsFromApi = async () => {
  return (await fetcher(
    "https://northwind.vercel.app/api/products"
  )) as Product[];
};

export const useCategories = () => {
  const { data, error } = useSWR(
    "https://northwind.vercel.app/api/categories",
    fetcher
  );

  return {
    data: data as Category[],
    isLoading: !error && !data,
    error,
  };
};

export const useProducts = () => {
  const { data, error } = useSWR(
    "https://northwind.vercel.app/api/products",
    fetcher
  );

  return {
    data: data as Product[],
    isLoading: !error && !data,
    error,
  };
};

export const useBasket = () => {
  const { data, error } = useSWR("/api/basket", fetcher);

  return {
    data: data as Basket,
    isLoading: !error && !data,
    error,
  };
};

export const useAddToBasket = () => {
  const { mutate } = useSWRConfig();

  const addToBasket = async (item: BasketItem) => {
    const updateFn = async (item: BasketItem) => {
      const response = await fetch("/api/basket", {
        method: "POST",
        body: JSON.stringify(item),
      });
      return (await response.json()) as Basket;
    };

    const updatedBasket = await mutate<Basket>("/api/basket", updateFn(item));
    return updatedBasket;
  };

  return [addToBasket];
};
