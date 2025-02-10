import {useEffect} from "react";
import Loading from "~/pages/components/loading";

export default function CRC25() {
  // redirect to crc25.fgacyc.com
    useEffect(() => {
        window.location.href = "https://crc25.fgacyc.com";
    }, []);
    return <Loading page_title={"CRC25"} />;
}