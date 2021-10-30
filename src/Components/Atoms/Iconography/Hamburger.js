import PropTypes from "prop-types";
import styled from "styled-components";
import RightNav from "../../Molecules/RightNav";

const StyledHamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 3;
    display: none;

    @media (max-width: ${({theme}) => theme.viewport.md}) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;

        div {
            width: 2rem;
            height: 0.25rem;
            background: ${({ theme }) => theme.colors.neutral[200]};
            border-radius: 0.5rem;
            transform-origin: 1px;
            transition: all .3s linear;
            
            &:nth-child(1) {
                transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
              }
          
            &:nth-child(2) {
                transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({ open }) => open ? 0 : 1};
            }
        
            &:nth-child(3) {
                transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
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
            <RightNav open={open}/>
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
