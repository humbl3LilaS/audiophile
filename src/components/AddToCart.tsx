import { Models } from "appwrite";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

type AddToCartProp = {
	data: Models.Document;
};

const AddToCart = ({ data }: AddToCartProp) => {
	const addToCart = useCartStore((state) => state.addToCart);
	const [count, setCount] = useState(0);
	const addBtnHandler = () => {
		if (count > 0) {
			addToCart({
				item: {
					name: data?.name,
					price: data?.price,
					img_url: data?.image[0],
				},
				count: count,
			});
		}
	};

	return (
		<div className="flex items-center gap-x-6">
			<div className="px-8 py-4 flex items-center justify-center gap-x-5 bg-paleWhite  shadow-md">
				<button
					onClick={() => setCount((prev) => prev - 1)}
					className="block  cursor-pointer">
					-
				</button>
				<span className="font-bold text-sm">{count}</span>
				<button
					onClick={() => setCount((prev) => prev + 1)}
					className="block  cursor-pointer">
					+
				</button>
			</div>
			<button
				className="px-8 py-4 text-white font-bold bg-primary transition-colors duration-500 hover:bg-secondary uppercase"
				onClick={addBtnHandler}>
				Add to cart
			</button>
		</div>
	);
};

export default AddToCart;
