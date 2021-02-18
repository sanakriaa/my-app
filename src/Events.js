import React from "react";
import { List, Header } from "semantic-ui-react";

export const Events = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <List.Item key={movie.name}>
            <Header>{movie.name}</Header>
            <Header>{movie.name2}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};