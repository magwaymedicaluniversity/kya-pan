import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "14%", padding: "10px" }}>
      Created By{" "}
      <Link
        color="#0d1b2a"
        href="https://www.facebook.com/profile.php?id=100053224263599&mibextid=ZbWKwL"
      >
        Nyan Lin Tun
      </Link>
    </div>
  );
};

export default Footer;
