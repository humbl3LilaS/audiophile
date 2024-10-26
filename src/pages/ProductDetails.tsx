import { Link, useParams } from "react-router-dom";
import { useGetGalleryImage, useGetProductById } from "../api/query";
import Image from "../components/Image";
import InBoxItems from "../components/InBoxItems";
import ProductPreview from "../components/ProductPreview";
import { cn } from "../lib/util";
import AddToCart from "../components/AddToCart";
import ProductCardSkeleton from "../components/ProductCardSkeleton.tsx";
import Section from "../components/Section.tsx";

const ProductDetails = () => {
	const { productId } = useParams();
	const { data: product, isFetching	 } = useGetProductById(productId ?? "");
	const { data: gallery } = useGetGalleryImage(productId ?? "");
	if(isFetching) {
		return  <Section className={"py-14"}>
			<ProductCardSkeleton />
		</Section>;
	}

	return (
		<Section className={"py-12"}>
			<Link
				to="/"
				className="block mb-6 text-black/50 font-medium text-left">
				Go Back
			</Link>
			<div className="md:grid grid-cols-2 gap-x-16">
				<Image
					srcMobile={product?.image[0]}
					srcTablet={product?.image[1]}
					srcDesktop={product?.image[2]}
					className="mb-8 mx-auto rounded-lg"
				/>
				<div className="md:flex flex-col justify-center">
					{product?.new && (
						<p className="mb-6 text-primary tracking-[10px] uppercase text-left lg:mb-8">
							new product
						</p>
					)}
					<h1 className="mb-6 font-bold text-[28px] text-left tracking-wider uppercase md:text-3xl lg:text-[40px] lg:mb-8">
						{product?.name}
						<br />
						{product?.category}
					</h1>
					<p className="max-w-[570px] mb-6 mx-auto text-left text-black/50 lg:mb-8 font-medium">
						{product?.description}
					</p>
					<p className=" mb-8 font-bold text-lg">$ {product?.price}</p>
					{product && <AddToCart data={product} />}
				</div>
			</div>

			<div className="lg:flex lg:mt-40 lg:gap-x-40">
				<div className="lg:flex-1">
					<h2 className="mt-20 mb-6 text-2xl font-bold tracking-wider uppercase md:text-3xl md:mb-8 md:mt-30 lg:mt-0">
						Features
					</h2>
					<p className="mb-20 opacity-50">{product?.features}</p>
				</div>
				<div className="md:flex items-start lg:block lg:flex-1">
					<h2 className="mt-20 mb-6 text-2xl font-bold tracking-wider uppercase md:flex-1 md:mt-0 md:text-3xl">
						In the box
					</h2>
					{product && <InBoxItems product_id={product?.$id} />}
				</div>
			</div>
			{gallery && (
				<ul className="mt-20 flex flex-col gap-y-6 md:grid grid-cols-2 gap-x-6">
					{gallery.map((item, idx) => (
						<li
							className={cn(
								idx === 2 && "col-start-2 col-end-3 row-start-1 row-span-2",
							)}
							key={idx}
						>
							<Image
								srcMobile={item?.img_url[0]}
								srcTablet={item?.img_url[1]}
								srcDesktop={item?.img_url[2]}
								className={"rounded-lg h-full w-full"}
								key={item?.$id}
							/>
						</li>
					))}
				</ul>
			)}
			<ProductPreview />
		</Section>
	);
};

export default ProductDetails;
