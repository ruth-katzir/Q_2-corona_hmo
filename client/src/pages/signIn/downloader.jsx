import { useEffect, useState } from "react";
import axios from "axios";


const Downloader = ({ filename }) => {
    const [img, setImg] = useState(null);

    useEffect(() => {
        console.log("innnnnnn");
        if (filename) {
            axios.get(`http://localhost:3600/api/upload?filename=${filename}`, {
                responseType: 'blob'
            })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    setImg(url);
                })
                .catch(error => {
                    console.error("Error fetching image", error);
                });
        }
    }, [filename]);

    return (
        img ? <img src={img} alt="Image description" style={{ width: 400, height: 200 }} /> : <></>
    )
};

export default Downloader;