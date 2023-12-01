import { FC, useEffect, useRef, useState } from "react";
import { MainProps } from "./interfaces";
import { MainContainer } from "./Main.styled";
import { Row } from "../Table/interfaces";
import SectionHome from "../SectionHome";
import { serviceGet } from "../../services";
import Loading from "../Loading";
import Head from "next/head";

const Main: FC<MainProps> = ({ dataTestId = "Main" }) => {
  const ref = useRef(0);
  const [data, setData] = useState<Row[]>([]);
  useEffect(() => {
    if (!ref.current) {
      ref.current += 1;
      serviceGet(String(process.env.NEXT_PUBLIC_URL_BASE), setData);
    }
  }, []);
  return (
    <MainContainer data-testid={dataTestId}>
      <Head>
        <title>My Little Blog</title>
        <link rel="icon" href="/star.png" sizes="any" />
      </Head>
      {data.length > 0 ? <SectionHome initRows={data} /> : <Loading />}
    </MainContainer>
  );
};

export default Main;
