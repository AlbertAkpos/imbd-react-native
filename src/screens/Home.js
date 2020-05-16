import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { Container, SearchInput } from "./style";
import MovieItem from "../components/MovieItem";

const Home = () => {
  useEffect(() => {
    getMovies();
  }, []);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async (search = "iron") => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}%20man&apikey=c83ef7cf`
      );
      const json = await response.json();
      setMovies(json.Search || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ padding: 20 }}>
      <SearchInput
        placeholder="Search movie......"
        onChangeText={(text) => getMovies(text)}
      />
      {loading && <Text>Loading....</Text>}
      {movies.length < 1 && <Text>No result</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return <MovieItem item={item} />;
        }}
        keyExtractor={(item) => item.imdbID}
      />
    </Container>
  );
};

export default Home;
