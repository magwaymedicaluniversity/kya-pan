import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "14%", padding: "10px" }}>
      Created By{" "}
      <Link
        color="#0d1b2a"
        href="#"
      >
        UMMG
      </Link>
    </div>
  );
};

export default Footer;
