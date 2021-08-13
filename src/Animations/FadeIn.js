import {useState, useEffect} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFadeIn = styled.div`
    opacity: ${({active}) => (active ? "1" : "0")};
    transform: ${({active}) => (active ? "none" : "translateY(20vh)")};
    visibility: ${({active}) => (active ? "visible" : "hidden")};
    transition: opacity 1200ms ease-out, transform 500ms ease-out, visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
`;

function FadeIn({children}) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const appearOptions = {
            threshold: 1,
            rootMargin: "0px 0px -100px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                    observer.unobserve(domRef.current);
                }
            })
        }, appearOptions);

        observer.observe(domRef.current);
    });

    return (
        <StyledFadeIn active={isVisible} ref={domRef}>
            {children}
        </StyledFadeIn>
    )
}

FadeIn.defaultProps = {
    children: createElement('div')
}

FadeIn.propTypes = {
    children: PropTypes.node.isRequired
}

export default FadeIn
