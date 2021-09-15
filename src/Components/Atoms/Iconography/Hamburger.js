import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHamburger = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: flex-end;
  border: none;
  right: 10px;

  div {
    width: 100%;
    height: 0.2rem;
    background-color: ${({theme}) => theme.colors.neutral.White};
    transform-origin: 1px;
    transition: all 0.3s ease-in;
    border-radius: 10px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate{0}")};
      width: ${({ open }) => (open ? "1.5rem" : "1.35rem")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate{0}")};
      width: ${({ open }) => (open ? "1.5rem" : "1rem")};
    }
  }

  @media (min-width: ${({theme}) => theme.viewport.lg}) {
    display: none;
  }
`;

function Hamburger({open, onClick}) {
    return (
        <StyledHamburger open={open} onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </StyledHamburger>
    )
}

Hamburger.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default Hamburger;