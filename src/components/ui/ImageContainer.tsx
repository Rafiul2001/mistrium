const ImageContainer: React.FC<{
  className?: string;
  width?: string;
  height?: string;
  src: string;
  alt: string;
}> = ({ className, width, height, src, alt }) => {
  return (
    <div
      className={`
        ${width ? `w-[${width}]` : "w-auto"}
        ${height ? `h-[${height}]` : "h-auto"}
        ${className}
        `}
    >
      <img className="w-full h-full" src={src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
