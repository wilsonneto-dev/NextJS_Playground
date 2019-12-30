import React from "react";

import Link from "next/link";
import Head from "next/head";

// import withAnalitics from "../hocs/withAnalitics";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <h1>Hello world</h1>
    <Link href="/users">
      <a>users</a>
    </Link>
  </>
);

// export default withAnalitics()(Home);
export default Home;
