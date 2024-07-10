import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import s from "./CustomLink.module.scss";

interface ICustomLink {
  to: string;
  children: string;
  className?: string;
}
interface IActive {
  isActive: boolean;
}

export const CustomLink = ({ to, children, className }: ICustomLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }: IActive) =>
        (isActive ? s.active : null) + " " + s.link + " " + className
      }
    >
      <Typography
        component="span"
        sx={{ display: "block", width: "max-content" }}
      >
        {children}
      </Typography>
    </NavLink>
  );
};
