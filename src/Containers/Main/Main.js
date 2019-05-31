import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`
// import { cleanBooks } from '../../Utility/cleanBooks';



class Main extends Component {

  async componentDidMount(){
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
    this.props.fetchAllBooks(url)

  
    // console.log(cleanedBooks)
  }

  render() {
    console.log('hi')

    return (
      <div className="Main-wrapper">
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

export const MapStateToProps = (state) => ({
 
})

export const MapDispatchToProps = (dispatch) => ({
fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})



export default connect(MapStateToProps, MapDispatchToProps) (Main)