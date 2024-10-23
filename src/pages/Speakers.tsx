import { useGetProductByCategory } from "../api/query";
import ProductPreview from "../components/ProductPreview";
import ProductPreviewCard from "../components/ProductPreviewCard";

const Speakers = () => {
	const { data: speakers } = useGetProductByCategory("speakers");

	return (
		<section className="">
			<h1 className="py-8 bg-darkBlack text-2xl text-white font-bold tracking-widest uppercase text-center">
				Headphones
			</h1>
			<div className="px-6 py-16 md:px-10 lg:px-40">
				{speakers &&
					speakers.map((item) => (
						<ProductPreviewCard
							key={item.$id}
							data={item}
						/>
					))}
			</div>
			<ProductPreview />
		</section>
	);
};

export default Speakers;
