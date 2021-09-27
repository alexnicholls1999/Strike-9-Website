import styled from "styled-components"

const StyledParagraph = styled.p`
    text-align: left;
    width: 100%;
    line-height: 2.5rem;

    @media (min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({right}) => right ? "right" : "left"};
        margin-left: ${({right}) => right && "auto"};
        margin-right: ${({left}) => left && "auto"};
    }
`;


export default function Paragraph({float, text}) {
    return <StyledParagraph right={float.right}>{text}</StyledParagraph>
}
