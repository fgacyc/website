import {FC, useEffect} from "react";

const ItunesPage : FC = () => {
    useEffect(() => {
        window.location.href = "https://www.youtube.com/playlist?list=PLykjqfmjxRYRQuERbIDG2XiYaJegmUkHk";
    }, []);

  return (
    <div>
      <h1>Itunes</h1>
    </div>
  );
}

export default ItunesPage;