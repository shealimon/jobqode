type MarklabImgProps = {
  src: string;
  alt?: string;
  className?: string;
  /** Cover a `relative` + sized parent (replaces next/image fill) */
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

/** Static files from `/public/marklab` — plain img avoids next/image fill/SVG issues */
export default function MarklabImg({
  src,
  alt = "",
  className = "",
  fill,
  width,
  height,
  priority,
}: MarklabImgProps) {
  const objectFit = className.includes("object-contain")
    ? "contain"
    : className.includes("object-cover")
      ? "cover"
      : undefined;

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        style={objectFit ? { objectFit } : undefined}
        className={`absolute inset-0 block h-full w-full max-w-none ${className}`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
