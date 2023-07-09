import {
  Facebook,
  Instagram,
  MailOutline,
  MusicNote,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SimplyBeeU</Logo>
        <Desc>
          Visit us on our social pages to see exclusive content and deals!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="000000">
            <MusicNote />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's</ListItem>
          <ListItem>Woman's</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Favorites</ListItem>
          <ListItem>Terms & Service</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 1234 Ave N, Miami FL
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 123-456-7890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contactUS@gmail.com
        </ContactItem>
        <Payment src="data:image/png;base64,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" />
      </Right>
    </Container>
  );
};

export default Footer;
