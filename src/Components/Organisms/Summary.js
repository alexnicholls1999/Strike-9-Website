import PropTypes from "prop-types";
import styled from 'styled-components';
import content from '../../utils/content';
import Blurb from '../Molecules/Text/Blurb';

const StyledSummaryWrapper = styled.div`
    display: flex;
    flex-flow: column;
    padding: 2rem 1rem;

    > * {
        flex-basis: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
        gap: 1rem;

        > * {
            padding: 1rem;
        }
    }
`;

const StyledSummaryBlurb = styled.div`
    padding-bottom: 1rem;

    h4 {
        line-height: 2;
        font-weight: bold;
    }

    h6 {
        color: ${({theme}) => theme.colors.primary[500]};
        font-weight: bold;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        h4 {
            width: 85%;
        }
    }

`;

const StyledSummaryInfo = styled.div`

`


function Summary({content}) {
    return (
        <StyledSummaryWrapper>
            <StyledSummaryBlurb>
                <Blurb content={{title: content.blurb.title, text: content.blurb.paragraph}} />
            </StyledSummaryBlurb>
            <StyledSummaryInfo> 
                <p>{content.paragraph}</p>
            </StyledSummaryInfo>
        </StyledSummaryWrapper>
    )
}

Summary.propTypes = {
    content: PropTypes.shape({
        blurb: PropTypes.shape({
            title: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired
        }),
        paragraph: PropTypes.string.isRequired,
        paragraph2: PropTypes.string.isRequired
    })
}

export default Summary
