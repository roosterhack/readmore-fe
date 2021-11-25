import styled from "styled-components";
import { Container } from "react-bootstrap";
import { ModalComponent } from "../modal/Modal";

const HeroComponent = styled.header`
  padding: 5rem 0;
  height: 60vh;
  background-image: url("https://source.unsplash.com/random/1500x800");
  background-size: cover;
  background-position: center;
`;

const HeaderContainer = styled.div`
  background-color: rgb(5, 148, 112);
  padding: 3rem;
  color: white;
  width: 32.5rem;
`;

const Heading = styled.h1`
  font-size: 5rem;
`;

const SubHeading = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
`;

export const Hero = () => {
  return (
    <HeroComponent>
      <Container>
        <HeaderContainer>
          <Heading>Feed your mind with the best</Heading>
          <SubHeading>
            Grow, learn, and become more successful by reading some of the top
            article by highly reputable individuals
          </SubHeading>
          <ModalComponent text="Signup" variant="primary" isSignupFlow={true} />
          <ModalComponent text="Login" variant="danger" isSignupFlow={false} />
        </HeaderContainer>
      </Container>
    </HeroComponent>
  );
};
