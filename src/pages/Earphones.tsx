import {useGetProductByCategory} from "../api/query";
import CallToAction from "../components/CallToAction";
import ProductPreview from "../components/ProductPreview";
import ProductPreviewCard from "../components/ProductPreviewCard";
import Section from "../components/Section";
import ProductCardSkeleton from "../components/ProductCardSkeleton.tsx";

const Earphones = () => {
    const {data: earphones} = useGetProductByCategory("earphones");

    return (
        <section className="">
            <h1 className="py-8 bg-darkBlack text-2xl text-white font-bold tracking-widest uppercase text-center">
                earphones
            </h1>
            <Section className="py-16">
                {earphones ?
                    earphones.map((item) => (
                        <ProductPreviewCard
                            key={item.$id}
                            data={item}
                        />
                    )) : <ProductCardSkeleton/>
                }
            </Section>
            {earphones && <CallToAction/>}
            {earphones && <ProductPreview/>}
        </section>
    );
};

export default Earphones;
