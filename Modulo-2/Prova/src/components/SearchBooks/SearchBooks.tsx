import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Books } from "../Books";

export const SearchBooks: React.FC = () => {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState([]);

  const getBooks = () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${text}`)
      .then((response) => response.json())
      .then((data) => {
        const books = data.hits;
        setData(books);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Api Books</Text>
      <TextInput
        style={styles.input}
        placeholder="search..."
        value={text}
        onChangeText={(search) => setText(search)}
      />
      <Button
        title="Search"
        onPress={() => {
          getBooks();
        }}
      />
      <ScrollView style={styles.scrollView}>
        {data.map((books) => (
          <Books
            key={books.objectID}
            title={books.title}
            author={books.author}
            url={books.url}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 45,
  },

  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    maxHeight: "10%",
  },
  scrollView: {
    marginHorizontal: -50,
  },
});
