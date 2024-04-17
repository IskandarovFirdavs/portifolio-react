import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MealsNavDiv = styled("div")`
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled(Link)`
  font-size: 65px;
  font-weight: 700;
  text-decoration: none;
  color: #84bd00;
  font-family: "Dancing Script", cursive;
  cursor: pointer;
  @media (max-width: 840px) {
    font-size: 50px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const LinK = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: #84bd00;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 840px) {
    font-size: 17px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Links = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 48%;
  padding: 15px;
  text-align: center;
  align-items: center;
  border-top: 2px solid #a9a9a977;
  border-bottom: 2px solid #a9a9a977;
  height: auto;
  @media (max-width: 840px) {
    padding: 10px;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

const Search = styled(Link)`
  height: 30px;
  width: 30px;
  @media (max-width: 840px) {
    height: 18px;
  width: 18px;
  }
  @media (max-width: 600px) {
    height: 14px;
  width: 14px;
  }
`;
const SearchImg = styled("img")`
  height: 30px;
  width: 30px;
  @media (max-width: 840px) {
    height: 18px;
  width: 18px;
  }
  @media (max-width: 600px) {
    height: 14px;
  width: 14px;
  }
`;

const MealsNav = () => {
  return (
    <MealsNavDiv>
      <Name to={"/"}>Food Mood :)</Name>
      <Links>
        <LinK to={"/"}>Home</LinK>
        <LinK to={"/Explore"}>Explore</LinK>
        <LinK to={"/Help"}>Help</LinK>
        <LinK to={"/Profile"}>Profile</LinK>
        <Search to={"/Search"}>
          <SearchImg
            src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/green-search-icon.png"
            alt=""
          />
        </Search>
      </Links>
    </MealsNavDiv>
  );
};

export default MealsNav;
