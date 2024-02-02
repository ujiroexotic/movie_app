import React, { useEffect } from 'react'
import './App.css';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfig, getGenres } from './store/homeSlice';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages and Components

import { Home, Explore, Details, PageNotFound, SearchResult } from './pages';
import { Header, Footer } from './components';

const App = () => {

  const selector = useSelector(state => state.home.url)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])

  // Just for testing
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then(res => {

        // We need images of three types (Crousel wali), (card wali) and (proifle wali) or (single page)
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfig(url))
      })
      .catch(err => console.log(err))
  };

  const genresCall = async () => {

    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    // Promises.all ek array leta h e.g: hm ne abhi isko promises ka array dia jismein 2 api fetch karni thi ye karega k jab tk dono ka response nhi ajata jab tk response return nhi karega donon ko ek sath return karega
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data?.map(({ genres }) => {
      return genres.map((item) => allGenres[item.id] = item) // It creates a key value player if key not found then it creates a key of id and makes a value of this key item
    })

    dispatch(getGenres(allGenres));

  }



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App