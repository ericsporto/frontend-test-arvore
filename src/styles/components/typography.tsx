interface BaseTitleProps {
  children: React.ReactNode;
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontWeight: 700 | 600 | 500 | 400
  fontSize: "2xl" | "lg" | "md" | "sm" | "xs"
}

const BaseTitle: React.FC<BaseTitleProps> = ({ children, className, tag }) => {
  return (
    <>
      {tag === 'h1' && <h1 className={className}>{children}</h1>}
      {tag === 'h2' && <h2 className={className}>{children}</h2>}
      {tag === 'h3' && <h3 className={className}>{children}</h3>}
      {tag === 'h4' && <h4 className={className}>{children}</h4>}
      {tag === 'h5' && <h5 className={className}>{children}</h5>}
      {tag === 'h6' && <h6 className={className}>{children}</h6>}
    </>
  );
};

BaseTitle.displayName = 'BaseTitle';
export default BaseTitle;
