import { useGetProductByCategory } from "../api/query";
import CallToAction from "../components/CallToAction";
import ProductPreview from "../components/ProductPreview";
import ProductPreviewCard from "../components/ProductPreviewCard";
import Section from "../components/Section";

const Headphones = () => {
	const { data: headphones } = useGetProductByCategory("headphones");

	return (
		<section className="">
			<h1 className="py-8 bg-darkBlack text-2xl text-white font-bold tracking-widest uppercase text-center">
				Headphones
			</h1>
			<Section className="py-16">
				{headphones &&
					headphones.map((item) => (
						<ProductPreviewCard
							key={item.$id}
							data={item}
						/>
					))}
			</Section>
			<CallToAction />
			<ProductPreview />
		</section>
	);
};

export default Headphones;
