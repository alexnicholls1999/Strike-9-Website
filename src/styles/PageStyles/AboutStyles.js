import styled from "styled-components";
import GreyBorder from "../../Components/Atoms/GreyBorder";


export const ButtonWrapper = styled.div`
    width: 150px;

`

export const Section = styled.div`
    background: ${({theme}) => theme.colors.primary.RoyalPurple};
    text-align: center;
    color: ${({theme}) => theme.colors.neutral.White};
    padding-top: 5% !important;
    padding-bottom: 5% !important;
    padding: 10%;

    @media(min-width: 768px) {
        p {
            width: 50%;
            margin: 0 auto;
        }
    }
`

export const AboutInformation = styled.div`
    background-color: ${({secondary}) => secondary ? "#F5F4F9" : "none"};

    @media(min-width: 768px) {
        padding-bottom: ${({secondary}) => secondary ? "5%" : "0"};
    }

`;

export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 10%;

    img {
        width: 100%;
        margin: 0 auto;
        border-radius: 5px;
    }

    @media(min-width: 768px) {
        margin-top: ${({secondary}) => secondary ? "-25%" : "0"};
    }
`;

export const GrowthWrapper = styled.div`
    padding-bottom: 15%;
    background-color: #F5F4F9;
`;


export const List = styled.div`
    margin: 0 auto;
    padding: 10%;

    p {
        padding-top: 10px;
        color: ${({theme}) => theme.colors.neutral.Black};
    }
`;

export const Point = styled.div`
    padding: 0;
    display: flex;
    
    h3 {
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

export const Strike9Team = styled.div`
    padding-bottom: 25%;
`;
