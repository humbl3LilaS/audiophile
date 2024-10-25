import { MouseEventHandler, useState } from "react";
import { useCartStore } from "../store/cartStore";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {useNavigate} from "react-router-dom";

const Cart = () => {
	const itemCount = useCartStore((state) => state.totalItem);
	const totalAmount = useCartStore((state) => state.totalPrice);
	const cart = useCartStore((state) => state.cart);
	const emptyCart = useCartStore((state) => state.emptyCart);
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);

	const navigate = useNavigate();


	const [cartVisible, setCartVisible] = useState(false);

	const cartToggler: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
		e,
	) => {
		e.stopPropagation();
		if (!cartVisible) {
			disablePageScroll();
			setCartVisible(true);
		} else {
			enablePageScroll();
			setCartVisible(false);
		}
	};

	const checkoutBtnHandler:MouseEventHandler<HTMLButtonElement> = (evt) => {
		cartToggler(evt);
		navigate("/checkout", {state: cart});
	}

	return (
		<div>
			<div
				onClick={cartToggler}
				className="cursor-pointer">
				<img
					src="/icons/icon-cart.svg"
					alt="cart"
				/>
			</div>
			{cartVisible && (
				<div className="w-screen h-screen bg-black/40 px-6  absolute z-10 left-0 md:px-10 lg:px-40">
					<div className="max-w-[377px] mx-auto mt-16 p-6 bg-white shadow-lg rounded-xl relative z-40 md:mx-0 md:ml-auto">
						<div className="mb-8 flex items-center justify-between">
							<p className="font-bold uppercase tracking-wider">
								Cart ({itemCount})
							</p>
							<button
								className="text-black/50"
								onClick={() => emptyCart()}>
								Remove all
							</button>
						</div>
						{cart.length === 0 && (
							<p className="text-2xl text-center font-bold">Empty Cart</p>
						)}
						{cart.length > 0 &&
							cart.map((cartItem) => (
								<div
									key={cartItem.item.name}
									className="flex gap-x-6 items-center mb-6 last:mb-0">
									<img
										src={cartItem.item.img_url}
										className="aspect-square w-16 rounded-lg"
									/>
									<p className="flex flex-col">
										<span className="font-bold tracking-wide">
											{cartItem.item.name}
										</span>
										<span className="text-black/50">
											${cartItem.item.price}
										</span>
									</p>
									<div className="px-4 py-3 ml-auto flex items-center justify-center gap-x-5 bg-paleWhite  shadow-md">
										<button
											className="block  cursor-pointer"
											onClick={() => removeFromCart(cartItem.item.name)}>
											-
										</button>
										<span className="font-bold text-sm">{cartItem.count}</span>
										<button
											className="block  cursor-pointer"
											onClick={() =>
												addToCart({ item: cartItem.item, count: 1 })
											}>
											+
										</button>
									</div>
								</div>
							))}
						<p className="mt-8 flex items-center justify-between">
							<span className="font-medium text-black/50 uppercase">Total</span>
							<span className="font-bold text-lg">$ {totalAmount}</span>
						</p>
						<button
							className=" w-full py-4 px-8 mt-6 block bg-primary text-white font-bold uppercase tracking-wide text-center
								disabled:bg-secondary
							"
							disabled={itemCount === 0}
							onClick={checkoutBtnHandler}>
							Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
