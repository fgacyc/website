import { type FC, useEffect } from "react";
import Loading from "~/pages/components/loading";

const CrossoverEvent: FC = () => {
    useEffect(() => {
        window.location.href =
            "https://vbgif.my.canva.site/crossover-2025-landing-page";
    }, []);

    return <Loading page_title={"Crossover"} />;
};

export default CrossoverEvent;
