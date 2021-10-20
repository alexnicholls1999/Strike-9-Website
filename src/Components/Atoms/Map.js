import { useRef, useEffect } from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import mapboxgl from "mapbox-gl"

const StyledMapContainer = styled.div`
    height: 25vh;
    width: 100%;

    @media(min-width; ${({theme}) => theme.viewport.md}) {
        height: 50vh;
    }
`;

function loadMap(map, mapProps, mapContainer, marker) {
    if (map.current) return;
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [mapProps.location.lat, mapProps.location.lng],
        zoom: [mapProps.zoom]
    })

    marker.current = new mapboxgl.Marker()
        .setLngLat([mapProps.location.lat, mapProps.location.lng])
        .addTo(map.current);
}

function Map({map}) {

    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const marker = useRef(null);

    mapboxgl.accessToken = map.accessToken

    useEffect(() => {
        loadMap(mapRef, map, mapContainer, marker)
    })

    return <StyledMapContainer ref={mapContainer}/>
}

Map.propTypes = {
    map: PropTypes.shape({
        accessToken: PropTypes.string.isRequired,
        zoom: PropTypes.number.isRequired,
        location: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        })
    })
}

export default Map
