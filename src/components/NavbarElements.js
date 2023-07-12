import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ccc;
  height: 65px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  font-size: 24px;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-size: 28px;
    color: #4070f4;
    font-weight: 500;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
