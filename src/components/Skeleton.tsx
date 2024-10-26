import {cn} from "../lib/util.ts";

type SkeletonProps = {
    className?: string
}

const Skeleton = ({className}: SkeletonProps) => {
    return (
        <div className={cn("w-full h-full bg-[#cfcfcf] animate-pulse", className)}/>
    );
};
export default Skeleton;