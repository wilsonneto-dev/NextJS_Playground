import React from "react";

import Link from "next/link";

export default () => (
  <>
    <Head>
      <Title>Home</Title>
    </Head>

    <h1>Hello world</h1>
    <Link href="/users">
      <a>users</a>
    </Link>
  </>
);
