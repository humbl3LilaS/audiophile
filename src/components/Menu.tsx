import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import ProductPreview from "./ProductPreview";

const Menu = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const handler = () => {
		if (!menuVisible) {
			disablePageScroll();
		} else {
			enablePageScroll();
		}
		setMenuVisible((prev) => !prev);
	};

	return (
		<>
			<div className="lg:hidden">
				<img
					src="/icons/icon-hamburger.svg"
					alt="menu"
					className="aspect-square w-4 block "
					onClick={handler}
				/>
			</div>
			{menuVisible && (
				<div className="top-0 left-0 absolute w-screen h-screen mt-[100px] bg-white z-30 lg:hidden">
					<ProductPreview />
				</div>
			)}
		</>
	);
};

export default Menu;
