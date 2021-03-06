export const uncleanBooks = {
  results: {
    books: [{
      title: 'Becoming', 
      description: 'The former first lady describes how she balanced work',
      primary_isbn10: 1234,
      weeks_on_list: 20,
      book_image: 'cool.com',
      rank: 1,
      contributor: 'by Michelle Obama',
      dagger: 0
    }]
  }
};

export const cleanBooks = [{
  id: 1234,
  rank: 1,
  author: 'by Michelle Obama',
  bookImage: 'cool.com',
  description: 'The former first lady describes how she balanced work',
  title: 'Becoming',
  weeksOnList: 20,
  isFavorited: false
}];

export const mockTopNews = [
  {
    title: 'Syria',
    id: 232
  }, {
    titel: 'Trump loses hair',
    id: 45
  }];

export const mockNewsError = '';

export const mockRealNewsError = 'something went wrong';

export const mockTravel = [{title:'New York'}, {title:'Boston'}];

export const mockRealTravelError = 'No Travel Here';

  
export const uncleanResponse = 
      {
        articles: [
          {
            source: { name: 'ESPN'},
            urlToImage: "espn.com",
            content: "Warriors lose again!",
            title: 'KD Leaves',
            author: 'ESPN',
            description: 'KD fueds with team',
            test: 'hmm!'
          }

        ]
      };
  
export const cleanResponse = 
    [{
      id: 1,
      source: 'ESPN',
      author: 'ESPN',
      articleImage:  "espn.com",
      description: 'KD fueds with team',
      title: 'KD Leaves',
      content: "Warriors lose again!",
      isfavorited: false
    }];

    
   
