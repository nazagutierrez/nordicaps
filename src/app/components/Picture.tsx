import { getImageProps } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Picture({
  avif,
  webp,
  alt,
  className,
}: {
  avif: StaticImport;
  webp: StaticImport;
  alt: string;
  className?: string;
}) {
  const common = { alt, className };
  const { props: { srcSet: avifSrcSet } } = getImageProps({ ...common, src: avif });
  const { props: { srcSet: webpSrcSet, ...rest } } = getImageProps({ ...common, src: webp });

  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet={avifSrcSet} type="image/avif" />
      <source srcSet={webpSrcSet} type="image/webp" />
      <img {...rest} className={className} />
    </picture>
  );
}
