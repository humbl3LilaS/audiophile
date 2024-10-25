import { ReactNode } from "react";
import { cn } from "../lib/util";

type SectionProps = {
	className?: string;
	children: ReactNode;
};

const Section = ({ className, children }: SectionProps) => {
	return (
		<div className={cn("px-6 md:px-10 lg:px-40", className)}>{children}</div>
	);
};

export default Section;
