
import clsx from "clsx";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";


export default function Image({ src, width, height, className, alt }) {
    return <img className={clsx("lazyload", className)} data-src={src} width={width} height={height} alt={alt} />;
}
