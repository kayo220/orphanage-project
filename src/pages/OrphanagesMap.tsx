import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
// @ts-ignore  
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa </h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Bahia</strong>
                    <span>Feira de Santana</span>

                </footer>
            </aside>

            <Map
                center={[-12.2546117, -38.9563696]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </Map>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}
export default OrphanagesMap;