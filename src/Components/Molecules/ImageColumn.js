import styled from "styled-components";

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

function ImageColumn({src, alt}) {
    return (
        <ImageGalleryColumn>
            <img key={index} src={src} alt={alt}/>
        </ImageGalleryColumn>
    )
}

export default ImageColumn
