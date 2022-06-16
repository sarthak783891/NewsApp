import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);
  const [loading, setloading] = useState(true);
  const updateNews = async () => {
    // setloading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResult(parsedData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
  };
  useEffect(() => {
    document.title = `${capatalize(props.category)} - NewsApp`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  const capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <title>NEWS APP - {props.category}</title>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        Daily News from {capatalize(props.category)} Category
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    desc={element.description}
                    url={element.url}
                    author={element.author}
                    img={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
