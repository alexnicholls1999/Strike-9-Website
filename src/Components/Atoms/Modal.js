import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
    height: 95vh;
    padding: 1%;
    margin: 0 auto;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: ${({show}) => show ? "-2rem 2rem 2rem rgba(0, 0, 0, 0.2)" : "1rem 0 0 rgba(0, 0, 0, 0.2)"};
    filter: ${({show}) => (show ? "blur(0)" : "blur(8px)")};
    opacity: ${({show}) => (show ? "1" : "0")};
    visibility: ${({show}) => (show ? "visible" : "hidden")};
    transform: ${(show) => (show ? "scale(1)": "scale(0.33)")}; 
`;

const StyledModalShadow = styled.div`
    background: black; 

`;

const StyledModalMain = styled.div`
    position: relative;
    padding: 0 5%;
    padding-top: 0;
    height: 85%;
    overflow-y: auto;
`;

const StyledModalFooter = styled.div`
    height: 15%;
    background: white;
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
