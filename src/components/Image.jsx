const Image = ({ alt, children, ...props }) => (
  <img alt={alt} {...props}>
    {children}
  </img>
);

export default Image;
