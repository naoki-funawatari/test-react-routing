import { Link as ReactLink } from "react-router-dom";

const Link = ({ children, ...props }) => <ReactLink {...props}>{children}</ReactLink>;

export default Link;
