import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Button = () => {
  // <iframe src="" width="640" height="2532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLScO2JOn8edOwaZVw8hrO3qmNGGxzkK0UwXak5xSvDbNvOePtw/viewform?embedded=true"
      color={red[50]}
    >
      <div
        style={{
          background: "#7b2cbf",
          textAlign: "center",
          color: "#fafafa",
          borderRadius: "10px",
          fontWeight: "bolder",
          padding: "10px",
          cursor: "pointer",
          margin: "8%",
        }}
      >
        Votingပေးရန်နှိပ်ပါ
      </div>
    </Link>
  );
};

export default Button;
