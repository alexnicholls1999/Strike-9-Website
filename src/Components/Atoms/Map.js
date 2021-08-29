import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mapboxgl, { Marker } from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw'

const StyledMapContainer = styled.div`
    height: 25vh;
    width: 100%;

    @media(min-width: 768px) {
        height: 50vh;
    }
`;

function Map({location, zoom}) {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
       if (map.current) return;
       map.current = new mapboxgl.Map({
           container: mapContainer.current,
           style: 'mapbox://styles/mapbox/streets-v11',
           center: [ location.lat, location.lng],
           zoom: zoom
       }) 

       marker.current = new mapboxgl.Marker()
           .setLngLat([location.lat, location.lng])
           .addTo(map.current);
    });  

    return <StyledMapContainer ref={mapContainer}/>
}

Map.propTypes = {
    zoom: PropTypes.number.isRequired,
    location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
}

export default Map
