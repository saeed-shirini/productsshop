import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./card.css";
import Photo from "./Photo";

function Photos() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        async function getAllPhotos() {
            let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            const data = response.data.slice(0, 12);
            setPhotos(data);
        }
        getAllPhotos()
    }, [])
    return (
        <>
            <div className="card-container">
                {photos.map((photo) => {
                    return (
                        <Photo key={photo.id} photo={photo}/>
                    )
                }
                )}
            </div>
        </>
            )
}

            export default Photos;