import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHamburger = styled.div`
    width: ${({ open }) => open ? "1.65rem" : "2rem"};
    height: 1.35rem;
    position: relative;
    top: 0.75rem;
    z-index: 3;
    display: none;

    @media (max-width: ${({theme}) => theme.viewport.md}) {
        display: flex;
        align-items: self-end;
        justify-content: space-around;
        flex-flow: column nowrap;

        div {
            height: 3px;
            background: ${({ theme }) => theme.colors.neutral[200]};
            border-radius: 0.5rem;
            transform-origin: 1px;
            transition: all .3s linear;
            
            &:nth-child(1) {
                transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
                width:  ${({ open }) => open ? "100%" : "65%"};
              }
          
            &:nth-child(2) {
                transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
                width: ${({ open }) => open ? "100%" : "80%"};
                opacity: ${({ open }) => open ? 0 : 1};
                display: ${({ open }) => open ? "none" : "block"};
            }
        
            &:nth-child(3) {
                transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
                width: ${({ open }) => open ? "100%" : "45%"};
                margin-top: ${({ open }) => open && "0.75rem"};
            }
        }
    }
`

function Hamburger({onClick, open}) {

    return (
        <>
            <StyledHamburger
                open={open}
                onClick={onClick}
            >
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburger>
        </>
    )
}

Hamburger.defaultProps = {
    open: false,
    onClick: () => {}
}

Hamburger.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired 

}

export default Hamburger
