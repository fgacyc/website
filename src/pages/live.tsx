import {FC, useEffect} from "react";

const LivePage : FC = () => {
    useEffect(() => {
        window.location.href = "https://www.youtube.com/@fgacyc/streams";
    }, []);


    return (
        <div>
            <h1>Spotify</h1>
        </div>
    );
}

export default LivePage;