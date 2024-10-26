import Skeleton from "./Skeleton.tsx";

const ProductCardSkeleton = () => {
    return (
        <div className={"w-full md:w-4/5 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-16"}>
            <Skeleton className={"w-full h-[400px] rounded-lg mb-8"}/>
            <div className={"md:self-center"}>
                <Skeleton className={"w-1/3 h-8 mb-2 mx-auto rounded-md lg:mx-0"}/>
                <Skeleton className={"w-2/3 h-8 mb-8 mx-auto rounded-md lg:mx-0 md:mb-10"}/>
                <div className={"mb-8"}>
                    <Skeleton className={"w-full h-3 mb-1 mx-auto rounded-md lg:mx-0"}/>
                    <Skeleton className={"w-2/3 h-3 mb-1 mx-auto rounded-md lg:mx-0"}/>
                    <Skeleton className={"w-4/5 h-3 mb-1 mx-auto rounded-md lg:mx-0"}/>
                    <Skeleton className={"w-2/3 h-3 mb-1 mx-auto rounded-md lg:mx-0"}/>
                    <Skeleton className={"w-full h-3 mb-1 mx-auto rounded-md lg:mx-0" }/>
                </div>
                <Skeleton className={"w-40 h-14 mx-auto mb-8 lg:mx-0" }/>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;