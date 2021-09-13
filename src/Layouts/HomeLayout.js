import { Component } from 'react'
import styled from "styled-components";


const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;


class HomeLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <IntroWrapper>

                </IntroWrapper>
                
            </>
        )
    }
}

export default HomeLayout;