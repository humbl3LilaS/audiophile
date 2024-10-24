import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CartStore = {
	cart: Cart[];
	totalPrice: number;
	totalItem: number;
	addToCart: (payload: Cart) => void;
	removeFromCart: (payload: string) => void;
	emptyCart: () => void;
};

type Cart = {
	item: Item;
	count: number;
};

type Item = {
	name: string;
	img_url: string;
	price: number;
};

export const useCartStore = create<CartStore>()(
	immer((set) => ({
		cart: [],
		totalPrice: 0,
		totalItem: 0,
		addToCart: (payload) =>
			set((state) => {
				const itemsInCart = state.cart.map((item) => item.item.name);
				if (itemsInCart.indexOf(payload.item.name) < 0) {
					state.cart.push(payload);
					state.totalPrice =
						state.totalPrice + payload.item.price * payload.count;
					state.totalItem = state.totalItem + payload.count;
				} else {
					state.cart = state.cart
						.filter((item) => (item.item.name = payload.item.name))
						.map((item) => ({ ...item, count: item.count + payload.count }));
					state.totalPrice =
						state.totalPrice + payload.item.price * payload.count;
					state.totalItem = state.totalItem + payload.count;
				}
			}),
		removeFromCart: (payload) =>
			set((state) => {
				const currentCountOfRequestItem = state.cart.filter(
					(item) => item.item.name === payload,
				)[0];
				console.log("itemcount", currentCountOfRequestItem.count);
				if (currentCountOfRequestItem.count === 1) {
					state.cart = state.cart.filter((item) => item.item.name !== payload);
					state.totalPrice =
						state.totalPrice - currentCountOfRequestItem.item.price;
					state.totalItem = state.totalItem - 1;
				} else {
					state.cart = state.cart.map((item) => {
						if (item.item.name === payload) {
							return { ...item, count: item.count - 1 };
						} else {
							return item;
						}
					});
					state.totalPrice =
						state.totalPrice - currentCountOfRequestItem.item.price;
					state.totalItem = state.totalItem - 1;
				}
			}),
		emptyCart: () =>
			set((state) => {
				state.cart = [];
				state.totalItem = 0;
				state.totalPrice = 0;
			}),
	})),
);
