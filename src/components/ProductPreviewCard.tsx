import { Models } from "appwrite";
import { Link } from "react-router-dom";
import Image from "./Image";

type ProductPreviewCardProps = {
	data: Models.Document;
};

const ProductPreviewCard = ({ data }: ProductPreviewCardProps) => {
	return (
		<article className="mb-30 last:mb-0 lg:grid grid-cols-2 gap-x-20 group" id={data?.name}>
			<Image
				srcMobile={data?.category_image[0]}
				srcTablet={data?.category_image[1]}
				srcDesktop={data?.category_image[2]}
				className="mb-8 rounded-lg md:w-ful group-even:col-start-2 group-even:row-start-1"
			/>

			<div className="lg:flex flex-col justify-center group-even:col-start-1 group-even:row-start-1">
				{data?.new && (
					<p className="mb-6 text-primary tracking-[10px] uppercase text-center lg:text-left lg:mb-8">
						new product
					</p>
				)}
				<h2 className="mb-6 font-bold text-[28px] text-center tracking-wider uppercase lg:text-left lg:text-[40px] lg:mb-8">
					{data?.name}
					<br />
					{data?.category}
				</h2>
				<p className="max-w-[570px] mb-6 mx-auto text-center text-black/50 lg:text-left lg:mb-8">
					{data?.description}
				</p>
				<Link
					to={`/products/details/${data.$id}`}
					className="w-fit py-4 px-7 uppercase font-bold tracking-wide mx-auto block transition-colors duration-700 bg-primary text-white hover:bg-secondary lg:mx-0">
					see product
				</Link>
			</div>
		</article>
	);
};

export default ProductPreviewCard;
