import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ImageBackground, Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from '../../components/components'
import { FilmItem } from '../../components/FilmItem/FilmItem'

const BASE_URL = 'https://api.themoviedb.org/3/'

const API_KEY = '27479e60681c50d3081750a08a447d06'

axios.defaults.baseURL = BASE_URL

const Filmoteka = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const { data } = await axios.get(
        `/trending/movie/week?api_key=${API_KEY}&page=1`
      )

      setFilms(data.results)
    }
    getFilms()
  }, [])

  return (
    <View>
      <Header />

      {films && (
        <FlatList
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 100 }}
          data={films}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default Filmoteka
