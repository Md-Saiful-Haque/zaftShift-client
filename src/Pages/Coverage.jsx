import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Container from '../components/Container';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const wareHouseData = useLoaderData()
    const mapRef = useRef(null)
    console.log(wareHouseData)

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = wareHouseData.find(wh => wh.district.toLowerCase().includes(location.toLowerCase()))

        if(district) {
            const coordinate = [district.latitude, district.longitude]
            mapRef.current.flyTo(coordinate, 14)
        }

    }
    return (
        <Container>
            <div>
                <h1 className='text-3xl text-secondary font-bold'>We are available in 64 districts</h1>
                <div className='my-10'>
                    {/* search */}
                    <form onSubmit={handleSearch}>
                        <label className='input'>
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" name='location' required placeholder="Search Your Location" />
                        </label>
                    </form>
                </div>
                {/*  */}
                <div>
                    <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]' ref={mapRef}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            wareHouseData.map(wareH => <Marker position={[wareH.latitude, wareH.longitude]}>
                                <Popup>
                                    <strong>{wareH.district}</strong> <br /> Service Area: {wareH.covered_area.join(",")}
                                </Popup>
                            </Marker>)
                        }
                    </MapContainer>
                </div>
            </div>
        </Container>
    );
};

export default Coverage;