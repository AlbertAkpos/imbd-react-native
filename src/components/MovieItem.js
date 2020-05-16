import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MovieItemContainer, MovieItemImage } from "./style";

const MovieItem = ({ item }) => {
  return (
    <MovieItemContainer>
      <MovieItemImage
        source={{ uri: `${item.Poster}` }}
        progressiveRenderingEnabled={true}
      />
      <Text>{item.Title}</Text>
    </MovieItemContainer>
  );
};

export default MovieItem;
