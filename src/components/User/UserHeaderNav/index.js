import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import styles from "./style.module.css";
// icones
import { ReactComponent as FeedIcon } from "../../../assets/feed.svg";
import { ReactComponent as StatsIcon } from "../../../assets/estatisticas.svg";
import { ReactComponent as NewPhotoIcon } from "../../../assets/adicionar.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/sair.svg";

const UserHeaderNav = () => {
  const [isMobile, setIsMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/conta"
        end
        title="Minhas fotos"
        activeClassName={styles.active}
      >
        <FeedIcon />
        {isMobile && "Minhas Fotos"}
      </NavLink>
      <NavLink
        to="/conta/estatisticas"
        title="Estatísticas"
        activeClassName={styles.active}
      >
        <StatsIcon />
        {isMobile && "Estatísticas"}
      </NavLink>
      <NavLink
        to="/conta/postar"
        title="Nova Foto"
        activeClassName={styles.active}
      >
        <NewPhotoIcon />
        {isMobile && "Nova Foto"}
      </NavLink>
      <button onClick={userLogout} title="Sair" activeClassName={styles.active}>
        <LogoutIcon />
        {isMobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
