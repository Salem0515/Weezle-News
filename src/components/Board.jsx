import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Board = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.articles) {
              setArticles(data.articles);
            } else {
              console.error("No articles found");
            }
          })
          .catch(error => console.error("Error fetching data:", error));
      }, [category]);
      

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            <div className="container">
                <div className="row">
                    {articles.map((news, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                src={news.urlToImage}
                                url={news.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;
