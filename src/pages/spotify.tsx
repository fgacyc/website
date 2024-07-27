import {type FC, useEffect} from "react";
import Loading from "~/pages/components/loading";

const SpotifyPage : FC = () => {
    useEffect(() => {
        window.location.href = "https://www.youtube.com/playlist?list=PLykjqfmjxRYRQuERbIDG2XiYaJegmUkHk";
    }, []);


    return (
        <Loading page_title={"Spotify"} />
    );
}

export default SpotifyPage;