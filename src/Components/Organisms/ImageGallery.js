import PropTypes from "prop-types";
import styled from "styled-components";

const ImageGalleryWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 0.2rem;
`;

const ImageGalleryColumn = styled.div`
    flex: 100%;
    padding: 0 0.5rem;

    img {
        margin-top: 1rem;
        vertical-align: middle;
        width: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.sm}) {
        flex: 50%;
        max-width: 50%;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        flex: 33%;
        max-width: 33%;
    }
`;



function ImageGallery() {
    return (
        <ImageGalleryWrapper>
            <ImageGalleryColumn>
                <img src="https://media.istockphoto.com/photos/beautiful-young-black-boy-training-on-the-football-pitch-picture-id1295248329?b=1&k=20&m=1295248329&s=170667a&w=0&h=jfcc98lBsoGb2FpCtsfh61egArW4_oFM1ZE9mYTMUFI=" alt="" />
                <img src="https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=20&m=1272269793&s=170667a&w=0&h=xie_NP8GQ6LFpiA0WLqoVUF7y2wyebpCJDQ4wJwPy40=" alt="" />
                <img src="https://media.istockphoto.com/photos/friends-on-a-soccer-team-picture-id648421058?b=1&k=20&m=648421058&s=170667a&w=0&h=39zD898lpj8K5S4OjkoE_QVJJYqvpea9df7dHCiocNY=" alt="" />
            </ImageGalleryColumn>
            <ImageGalleryColumn>
                <img src="https://media.istockphoto.com/photos/red-and-blue-jersey-boy-footballers-competing-on-field-picture-id1220731685?b=1&k=20&m=1220731685&s=170667a&w=0&h=hsXjNo3dRMcXQsQ27isAw8e4Xjmp-ePodlsH3Oqrs1w=" alt="" />
                <img src="https://media.istockphoto.com/photos/african-american-young-boy-playing-soccer-in-a-stadium-pitch-child-picture-id1199894704?b=1&k=20&m=1199894704&s=170667a&w=0&h=yvCSi157Nr6QiKbJ8yp1Kq18yem2g8qd9ApAaInS9po=" alt="" />
                <img src="https://media.istockphoto.com/photos/kids-soccer-football-young-children-players-match-on-soccer-field-picture-id686198128?b=1&k=20&m=686198128&s=170667a&w=0&h=f-z6PsiD6ybJEXMquH84fALAeXW8NqvGXCdQrM87FBw=" alt="" />
            </ImageGalleryColumn>
            <ImageGalleryColumn>
                <img src="https://media.istockphoto.com/photos/girl-kicking-a-soccer-ball-picture-id1309206038?b=1&k=20&m=1309206038&s=170667a&w=0&h=W2g_5NoSXPQ4my9yCNf27AT3lBf1W-xTpwGYfrNSXhI=" alt="" />
                <img src="https://images.unsplash.com/photo-1622659097509-4d56de14539e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHNvY2NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </ImageGalleryColumn>
        </ImageGalleryWrapper>
    )
}

export default ImageGallery
