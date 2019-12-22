import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key } from "../private";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export default function HomeScreen() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=3e11806009cadfb91187ad7b65b9dc21`
      )
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            The start of the React Native Movie DB!!
          </Text>
          <Text style={{ marginTop: 50 }}>
            {movies && movies.original_title}
          </Text>
          <View>
            <Image
              style={{ width: 100, height: 150, marginTop: 25 }}
              source={{
                uri: `${POSTER_PATH}${movies.poster_path}`
              }}
            />
            {/* <img
              src={``}
              alt={movies.original_title}
            /> */}
          </View>
          {/* {movies.map(movie => (
            
          ))} */}
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    marginVertical: 50
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
