import React from "react";
import styled from "styled-components";
import { MenuOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: white;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center" })};
`;

const Menu = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "14px" })};
`;

const Input = styled.input`
  border: white;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: 2 })};
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft: "0vh" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center", marginRight: "10px" })};
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Menu>
            <MenuOutlined />
          </Menu>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontsize: "16" }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to={"/"}>
            <Logo>SimplyByou</Logo>
          </StyledLink>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>LOGIN</MenuItems>
          <MenuItems>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
