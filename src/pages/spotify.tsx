import {FC, useEffect} from "react";

const SpotifyPage : FC = () => {
    useEffect(() => {
        window.location.href = "https://www.youtube.com/playlist?list=PLykjqfmjxRYRQuERbIDG2XiYaJegmUkHk";
    }, []);


    return (
        <div>
            <h1>Spotify</h1>
        </div>
    );
}

export default SpotifyPage;