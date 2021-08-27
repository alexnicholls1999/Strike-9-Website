import styled from "styled-components"

export const Sponsors = styled.div`
    background-color: ${({theme}) => theme.colors.secondary.Violet};
    padding: 10%;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        padding: 2.5% !important;
    }
`;

export const TrainingPlans = styled.div`
    padding-top: 25px;
`;

export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    img {
        width: 75%;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        img {
            position: absolute;
            z-index: 2;
        }
    }
`;

export const GrowthWrapper = styled.div`
    padding-bottom: 15%;
    background-color: #F5F4F9;
`;


export const List = styled.div`
    padding-top: 5%;
    margin: 0 auto;
    padding: 5%;

    p {
        padding-top: 10px;
        color: ${({theme}) => theme.colors.neutral.Black};
        text-align: ${({growth}) => (growth ? "right" : "left")};
    }
`;

export const Point = styled.div`
    padding: 0;
    display: flex;
    flex-direction: ${({growth}) => (growth ? "row-reverse" : "row")};
    
    h3 {
        padding-left: 10px;
        padding-right: ${({growth}) => (growth ? "10px" : "0")};
        color: ${({theme}) => theme.colors.neutral.SilverGrey};
    }
    h5 {
        padding-right: 10px;
        padding: 2px;
        height: 2px;
        border-radius: 10px;
        color: black;
        box-shadow: 0 32px 0px 0 #5E3DB3;
    }
`;

export const Promises = styled.div`
    background: ${({theme}) => theme.colors.primary.RoyalPurple};
    text-align: center;
    color: ${({theme}) => theme.colors.neutral.White};
    padding-top: 5% !important;
    padding-bottom: 5% !important;
    padding: 10%;
    h4 {
        font-weight: ${({theme}) => theme.typography.fontWeight.semiBold}
    }
`;

export const About = styled.div`
    padding: 5%;

    button {
        width: 150px;
    }
    img {
        width: 100%;
        padding-top: 25px;
    }
    h2 {
        padding-top: 10%;
    }
    p {
        color: ${({theme}) => theme.colors.neutral.Black};
    }
`;