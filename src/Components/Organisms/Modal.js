import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledModal = styled.div`
    height: 95vh;
    padding: 1%;
    margin: 0 auto;
    background: ${({theme}) => theme.colors.neutral[100]};
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: ${({show}) => show ? "-2rem 2rem 2rem rgba(0, 0, 0, 0.2)" : "1rem 0 0 rgba(0, 0, 0, 0.2)"};
    filter: ${({show}) => (show ? "blur(0)" : "blur(8px)")};
    opacity: ${({show}) => (show ? "1" : "0")};
    visibility: ${({show}) => (show ? "visible" : "hidden")};
    transform: ${(show) => (show ? "scale(1)": "scale(0.33)")}; 

    @media(min-width: ${({theme}) => theme.viewports.md}) {
        width: 500px;
        height: 500px;
        margin-top: 25vh;
    }
`;

const StyledModalShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${({theme}) => theme.colors.neutral[900]};
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 0.25;
`;

const StyledModalMain = styled.div`
    position: relative;
    padding: 5%;
    height: 85%;
    overflow-y: auto;

    h2 {
        font-size: 1.75rem;
        color: ${({theme}) => theme.colors.primary[600]};
        font-weight: 600;
    }
`;

const StyledModalFooter = styled.div`
    background: ${({theme}) => theme.colors.primary[100]};
    float: right;
    width: 150px;
    margin-right: 15px;
`;

function Modal({onClose, show, children}) {
    
    const handleOnClose = (e) => {
        onClose && onClose(e);
    };

    return (
        <>
            {!show ? null : (
                <>
                    <StyledModal show={show}>
                        <StyledModalMain>{children}</StyledModalMain>
                        <StyledModalFooter>
                            <Button onClick={handleOnClose} text="CLOSE"/>
                        </StyledModalFooter>
                    </StyledModal>

                    <StyledModalShadow />
                </>
            )}
        </>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default Modal;