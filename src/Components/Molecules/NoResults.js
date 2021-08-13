import styled from "styled-components";

const StyledNoResults = styled.div`
    padding: 5rem 0;
    text-align: center;
    width: 100%;

    h3 {
        color: ${({theme}) => theme.colors.primary.RoyalPurple};
        font-weight: bold;
    }
`;

function NoResults() {
    return (
        <>
            <StyledNoResults>
                <h3>No events found. Please Try Again! </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, soluta!</p>
            </StyledNoResults>
        </>
    )
}

export default NoResults
