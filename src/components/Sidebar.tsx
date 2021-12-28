import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/components/sidebar.css';

export default function Sidebar() {
    const { goBack } = useHistory();
    return (
        <aside className="app-sidebar">
            <header>
                <img src={mapMarkerImg} alt="Happy" />

            </header>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#fff" />
                </button>
            </footer>
        </aside>

    )

}