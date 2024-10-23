import { cn } from "../lib/util";

type ImageProps = {
	className?: string;
	srcMobile: string;
	srcTablet: string;
	srcDesktop: string;
};

const Image = ({ className, srcDesktop, srcTablet, srcMobile }: ImageProps) => {
	return (
		<picture>
			<source
				media="(min-width: 1024px)"
				srcSet={srcDesktop}
			/>
			<source
				media="(min-width: 768px)"
				srcSet={srcTablet}
			/>
			<source />
			<img
				className={cn(className)}
				src={srcMobile}
			/>
		</picture>
	);
};

export default Image;
