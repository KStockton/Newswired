import React, { Component } from 'react';
import { cleanBooks } from '../../Utility/cleanBooks';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`


export default class Main extends Component {

  async componentDidMount(){
    const url = 
    fetchAllBooks()
    // const response = await fetch(`)
    const books = await response.json()
    const cleanedBooks = cleanBooks(books)
    console.log(cleanedBooks)
  }

  render() {
    console.log('hi')
    return (
      <div class="Main-wrapper">
        <article className="box">Hi</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
        <article className="box">HI</article>
      </div>
    )
  }
}
