import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BooksProps {
  author?: string;
  title?: string;
  url?: string;
}

export const Books: React.FC<BooksProps> = ({ author, title, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.books}>
        <Text>Author: {author}</Text>
        <Text>
          Title:
          {title}
        </Text>
        <Text>
          Url:
          {url}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  books: {
    flex: 1,
    backgroundColor: "#7094db",
    width: "100%",
    maxWidth: "80%",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 40,
  },
});
