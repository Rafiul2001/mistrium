const ImageContainer: React.FC<{
  className?: string;
  src: string;
  alt: string;
}> = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img className="w-full h-full" src={src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
