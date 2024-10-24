import { Link, useParams } from "react-router-dom";
import { useGetGalleryImage, useGetProductById } from "../api/query";
import Image from "../components/Image";
import InBoxItems from "../components/InBoxItems";
import ProductPreview from "../components/ProductPreview";

const ProductDetails = () => {
	const { productId } = useParams();
	const { data: product } = useGetProductById(productId ?? "");
	const { data: gallery } = useGetGalleryImage(productId ?? "");
	console.log(gallery);

	return (
		<section className="p-6">
			<Link
				to="/"
				className="block mb-6 text-black/50 font-medium text-left">
				Go Back
			</Link>
			<Image
				srcMobile={product?.image[0]}
				srcTablet={product?.image[1]}
				srcDesktop={product?.image[2]}
				className="mb-8 mx-auto rounded-lg"
			/>
			{product?.new && (
				<p className="mb-6 text-primary tracking-[10px] uppercase text-left lg:mb-8">
					new product
				</p>
			)}
			<h1 className="mb-6 font-bold text-[28px] text-left tracking-wider uppercase lg:text-[40px] lg:mb-8">
				{product?.name}
				<br />
				{product?.category}
			</h1>
			<p className="max-w-[570px] mb-6 mx-auto text-left text-black/50 lg:mb-8 font-medium">
				{product?.description}
			</p>
			<p className=" mb-8 font-bold text-lg">$ {product?.price}</p>
			{/* //Todo add quantity controller and cart */}
			<h2 className="mt-20 mb-6 text-2xl font-bold tracking-wider uppercase">
				Features
			</h2>
			<p className="mb-20 opacity-50">{product?.features}</p>
			<h2 className="mt-20 mb-6 text-2xl font-bold tracking-wider uppercase">
				In the box
			</h2>
			{product && <InBoxItems product_id={product?.$id} />}
			{gallery && (
				<ul className="mt-20 flex flex-col gap-y-6">
					{gallery.map((item) => (
						<Image
							srcMobile={item?.img_url[0]}
							srcTablet={item?.img_url[1]}
							srcDesktop={item?.img_url[2]}
							className="rounded-lg"
							key={item?.$id}
						/>
					))}
				</ul>
			)}
			<ProductPreview />
		</section>
	);
};

export default ProductDetails;
