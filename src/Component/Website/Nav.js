import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function Nav() {
  const [t, i18n] = useTranslation();
  const [icon, setIcon] = useState(true);
  const menu = useRef();
  const handelIcon = () => {
    setIcon(!icon);
    if (menu.current.style.display === "none") {
      menu.current.style.display = "flex";
    } else {
      menu.current.style.display = "none";
    }
  };
  return (
    <nav className="main-nav d-flex">
      <div className="logo">
        <img src={require("../../images/mainLogo.jpg")} alt="logo" />
      </div>
      <ul className="main" ref={menu} style={{display: "none"}}>
        <li>
          <Link to="/" className="link">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="/cours" className="link">
            {t("cours")}
          </Link>
        </li>
        <li>
          <Link to="/TestInformation" className="link" onClick={() => {}}>
            {t("test")}
          </Link>
        </li>
        <li>
          <Link to="/offers" className="link">
            {t("offer")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            {t("concat")}
          </Link>
        </li>
      </ul>
      <div>
        {i18n.language === "en" && (
          <button
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            AR
          </button>
        )}
        {i18n.language === "ar" && (
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </button>
        )}
        {icon ? (
          <i onClick={handelIcon} className="fas fa-bars"></i>
        ) : (
          <i onClick={handelIcon} className="fas fa-close"></i>
        )}
      </div>
    </nav>
  );
}
