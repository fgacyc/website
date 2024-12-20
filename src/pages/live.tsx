import { type FC, useEffect } from "react";
import Loading from "~/pages/components/loading";

const LivePage: FC = () => {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/@fgacyc/streams";
  }, []);

  return <Loading page_title={"Live"} />;
};

export default LivePage;
