import {useGetProductByCategory} from "../api/query";
import CallToAction from "../components/CallToAction";
import ProductPreview from "../components/ProductPreview";
import ProductPreviewCard from "../components/ProductPreviewCard";
import Section from "../components/Section";
import ProductCardSkeleton from "../components/ProductCardSkeleton.tsx";

const Speakers = () => {
    const {data: speakers} = useGetProductByCategory("speakers");

    return (
        <section className="">
            <h1 className="py-8 bg-darkBlack text-2xl text-white font-bold tracking-widest uppercase text-center">
                speakers
            </h1>
            <Section className="py-16">
                {speakers ?
                    speakers.map((item) => (
                        <ProductPreviewCard
                            key={item.$id}
                            data={item}
                        />
                    )) : <ProductCardSkeleton/>
                }
            </Section>
            {speakers && <CallToAction/>}
            {speakers && <ProductPreview/>}
        </section>
    );
};

export default Speakers;
