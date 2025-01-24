import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextpage, setNextpage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);


  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const newsload = async () => {
    props.setProgress(10);
    let url = `https://newsdata.io/api/1/latest?&country=${props.country}&category=${props.category}&language=en&apikey=${props.apikey}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    console.log(parsedData);
    setNextpage(parsedData.nextPage);
    setResults(parsedData.results);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/latest?&country=${props.country}&category=${props.category}&language=en&apikey=${props.apikey}&page=${nextpage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setNextpage(parsedData.nextPage);
    setResults((prevResults) => [...prevResults, ...parsedData.results]);
  };

  useEffect(() => {
    document.title = props.category === "top"?"News bank - get your daily dose of news for free":`News Bank - ${capitalizeFirstLetter(props.category)}`
    newsload();
    // eslint-disable-next-line
  }, [props.category, props.country, props.apikey, props.setProgress]);

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "100px" }}>
       { props.category === "top"? "News bank - Top Headlines":`News Bank - ${capitalizeFirstLetter(props.category)} Top Headlines`}
        </h1>
        {loading && <spinner/>}
        <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-2">
            <div className="row">
              {!loading &&
                results.length > 0 &&
                results.map((element) => {
                  return (
                    <div className="col-md-4" key={element.link}>
                      <NewsItems
                        title={element.title ? element.title.slice(0, 42) : " "}
                        description={
                          element.description
                            ? element.description.slice(0, 80)
                            : " "
                        }
                        imageurl={element.image_url}
                        newsurl={element.link}
                        date={element.pubDate}
                        author={element.creator}
                        source={element.source_name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
};
