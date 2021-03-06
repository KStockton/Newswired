const shortid = require('shortid');


export const cleanResponse = (uncleanResponse) => {
  const cleanResponse = uncleanResponse.articles.map(article => {
    return {
      id: shortid.generate(),
      source: article.source.name,
      author: article.author,
      articleImage: article.urlToImage,
      description: article.description,
      title: article.title,
      content: article.content,
      isfavorited: false
    };
  });
  return cleanResponse;
};