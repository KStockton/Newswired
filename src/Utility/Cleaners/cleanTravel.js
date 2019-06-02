export const cleanTravel = (uncleanTravel) => {
  const cleanedAllTravel = uncleanTravel.results.map(travel => {
    // console.log(travel)
   return  {
       id: travel.created_date,
       title: travel.title,
       author: travel.byline,
       abstract: travel.abstract,
       image: travel.multimedia[1].url
    }
  })
  return cleanedAllTravel
}