import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    // const title = "Main Title";
    // const description = "Main description";
    // const news = [
    //   {
    //     title: "title1",
    //     description: "description1",
    //   },
    //   {
    //     title: "title2",
    //     description: "description2",
    //   },
    //   {
    //     title: "title3",
    //     description: "description3",
    //   },
    // ];

    const news = this.props.news.map((news, index) => (
      <NewsItem key={index} title={news.title} description={news.description} />
    ));
    return (
      <div>
        {/* <NewsItem title={title} description={description} /> */}
        {/* <NewsItem title={news[0].title} description={news[0].description} />
        <NewsItem title={news[1].title} description={news[1].description} />
        <NewsItem title={news[2].title} description={news[2].description} /> */}

        {news}
      </div>
    );
  }
}

export default News;