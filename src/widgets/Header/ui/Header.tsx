import styles from "./Header.module.css";
import { FC } from "react";
import logo from "@/shared/assets/icons/logo.svg";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}>
        <a href="#">
          <Image src={logo} alt="logo" />
          <Typography variant="md">VPN</Typography>
        </a>
      </div>
      <div>
        <Button theme="secondary" rounded>
          Get VPN
        </Button>
      </div>
    </header>
  );
};
