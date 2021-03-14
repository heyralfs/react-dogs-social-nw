import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import styles from "./style.module.css";
// icones
import { ReactComponent as FeedIcon } from "../../../assets/feed.svg";
import { ReactComponent as StatsIcon } from "../../../assets/estatisticas.svg";
import { ReactComponent as NewPhotoIcon } from "../../../assets/adicionar.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/sair.svg";
import useMedia from "../../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const isMobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu((mobileMenu) => !mobileMenu)}
        ></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          to="/dogs-app/conta"
          end
          title="Minhas fotos"
          activeClassName={styles.active}
        >
          <FeedIcon />
          {isMobile && "Minhas Fotos"}
        </NavLink>
        <NavLink
          to="/dogs-app/conta/estatisticas"
          title="Estatísticas"
          activeClassName={styles.active}
        >
          <StatsIcon />
          {isMobile && "Estatísticas"}
        </NavLink>
        <NavLink
          to="/dogs-app/conta/postar"
          title="Nova Foto"
          activeClassName={styles.active}
        >
          <NewPhotoIcon />
          {isMobile && "Nova Foto"}
        </NavLink>
        <button onClick={userLogout} title="Sair">
          <LogoutIcon />
          {isMobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
