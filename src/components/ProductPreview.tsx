import { Link } from "react-router-dom";

const ProductPreview = () => {
	return (
		<section>
			<div className="px-6 py-24 md:flex items-center justify-center gap-x-4 md:px-10 lg:px-40">
				<div className="w-full pt-20 pb-4 mb-14 relative bg-paleWhite rounded-lg shadow-md md:mb-0 group">
					<img
						src="/images/image-category-thumbnail-headphones.png"
						className="aspect-square w-28 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
					/>
					<h2 className="w-full  mb-4 block uppercase font-bold  rounded-lg text-center tracking-wide">
						headphones
					</h2>
					<Link
						to={"/headphones"}
						className="w-full flex items-center gap-x-4 justify-center font-bold ">
						<span className="uppercase tracking-wide text-black/50 transition-colors duration-500 group-hover:text-primary">
							shop
						</span>
						<img
							src="/icons/icon-arrow-right.svg"
							alt="to shop"
						/>
					</Link>
				</div>

				<div className="w-full pt-20 pb-4 mb-14 relative bg-paleWhite rounded-lg shadow-md md:mb-0 group">
					<img
						src="/images/image-category-thumbnail-speakers.png"
						className="aspect-square w-28 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
					/>
					<h2 className="w-full  mb-4 block uppercase font-bold  rounded-lg text-center tracking-wide">
						speakers
					</h2>
					<Link
						to={"/speakers"}
						className="w-full flex items-center gap-x-4 justify-center font-bold">
						<span className="uppercase tracking-wide text-black/50 transition-colors duration-500 group-hover:text-primary">
							shop
						</span>
						<img
							src="/icons/icon-arrow-right.svg"
							alt="to shop"
						/>
					</Link>
				</div>
				<div className="w-full pt-20 pb-4 relative bg-paleWhite rounded-lg shadow-md group">
					<img
						src="/images/image-category-thumbnail-earphones.png"
						className="aspect-square w-28 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
					/>
					<h2 className="w-full  mb-4 block uppercase font-bold  rounded-lg text-center tracking-wide">
						earphones
					</h2>
					<Link
						to={"earphones"}
						className="w-full flex items-center gap-x-4 justify-center font-bold">
						<span className="uppercase tracking-wide text-black/50 transition-colors duration-500 group-hover:text-primary">
							shop
						</span>
						<img
							src="/icons/icon-arrow-right.svg"
							alt="to shop"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default ProductPreview;
