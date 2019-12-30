import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
        <li>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

Users.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );
  console.log(response.data);
  return { users: response.data };
};

export default Users;
