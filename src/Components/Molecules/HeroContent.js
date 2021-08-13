import { createElement } from 'react';
import PropTypes from 'prop-types';

export default function HeroContent({children}) {
    return <>{children}</>
}

HeroContent.defaultProps = {
    children: createElement('div')
}

HeroContent.propTypes = {
    children: PropTypes.node.isRequired
}