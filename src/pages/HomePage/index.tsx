import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import TodoInput from "reusables/TodoInput";
import Layout from "reusables/Layout";
import Timeline from "./components/Timeline";
import Inbox from "./components/Inbox";
import { withApollo } from "../../../apollo/client";

const FeedQuery = gql`
  query FeedQuery {
    feed {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author.name}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
);

const style = css`
  color: hotpink;
`;

const Container = styled.div`
  justify-content: space-between;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomePage = ({ foo }) => {
  const { loading, error, data } = useQuery(FeedQuery);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <div>
        <TodoInput />
      </div>
      <div>
        <Timeline />
      </div>
      <div css={{ height: "30vh", border: "2px solid coral" }}>
        <Inbox />
      </div>
    </Container>
  );
};

export default HomePage;
