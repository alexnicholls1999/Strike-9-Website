import styled from "styled-components"

const StyledTitle = styled.h2`
    font-size: 35px;

    &::after {
        content: '${(props) => props.title}';
        position: absolute;
        top: 3vh;
        left: 0;
        font-size: 50px;
        color: ${({theme}) => theme.colors.neutral.Grey};
        z-index: -1;
        opacity: 0.5;
    }

`;

function Title({title, ...props}) {
    return (
        <StyledTitle {...props}>{title}</StyledTitle>
    )
}

export default Title
