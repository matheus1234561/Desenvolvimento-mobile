import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";

interface BooksProps {
  author?: string;
  title?: string;
  url?: string;
}

export const Books: React.FC<BooksProps> = ({ author, title, url }) => {
  const [rate, setRate] = React.useState(0);

  const onStarRating = (rating: number) => {
    setRate(rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.books}>
        <Text>
          <Text style={styles.title}>Author:</Text>
          <Text style={styles.text}>{author}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Title:</Text>
          <Text style={styles.text}>{title}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Url:</Text>
          <Text style={styles.text}> {url}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Rate:</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            selectedStar={(rate: number) => onStarRating(rate)}
            fullStar={"ios-star"}
            rating={rate}
            fullStarColor={"white"}
            iconSet={"Ionicons"}
            halfStar={"ios-star-half"}
            emptyStar={"ios-star-outline"}
          />
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
  },
  books: {
    backgroundColor: "#7094db",
    width: "100%",
    maxWidth: "80%",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 40,
    height: "80%",
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 5,
  },
  title: {
    fontWeight: "700",
    color: "#ffffff",
  },
});
