import React, { useEffect, useState } from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
// @ts-ignore  
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from "../utils/mapIcons";
import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, []);//executa quando as variáveis dentro do vetor forem alteradas, chama apenas uma vez enquanto o componente for visivel em tela
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

                {
                    orphanages.map(orphanage => {
                        return (
                            <Marker
                                key={orphanage.id}
                                icon={mapIcon}
                                position={[orphanage.latitude, orphanage.longitude]}
                            >
                                <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                                    {orphanage.name}
                                    <Link to={`/orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={20} color="#FFF" />
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }


            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}
export default OrphanagesMap;