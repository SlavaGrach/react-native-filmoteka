import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView
} from 'react-native';

const FilmItem = ({ film }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.filmItem}
      onLongPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${film.poster_path}`
        }}
        style={styles.images}
      />
      <Text style={styles.title}>{film.title}</Text>
      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={styles.modal}>
          <Text
            style={styles.closeBtn}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            &times;
          </Text>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${film.poster_path}`
            }}
            style={styles.modalImg}
          />
          <Text style={styles.overview}>{film.overview}</Text>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filmItem: {
    width: '45%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 15
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center'
  },
  closeBtn: {
    fontSize: 30,
    textAlign: 'right'
  },
  modal: {
    margin: 25
  },
  modalImg: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    display: 'flex',
    alignItems: 'center'
  },
  overview: {
    fontSize: 18,
    marginTop: 25
  }
});

export { FilmItem };
