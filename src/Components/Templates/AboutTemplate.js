import PropTypes from "prop-types";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";

import Pattern from "../Atoms/Iconography/Pattern";

function AboutTemplate({aboutContent}) {
    return (
        <MainLayout
            content={{
                title: aboutContent.heroTitle,
                text: aboutContent.paragraph
            }}
        >
            <Pattern />

        </MainLayout>
    )
}

AboutTemplate.propTypes = {
    aboutContent: PropTypes.shape({
        heroTitle: PropTypes.string,
        paragraph: PropTypes.string,
    })
}

export default AboutTemplate
