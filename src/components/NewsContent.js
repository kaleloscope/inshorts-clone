import React from 'react';
import { Container } from '@mui/material';
import NewsCard from "./NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
    return (
        <Container maxWidth = "md">
            <div className = "content">
                {
                    newsArray.map((newsItem) => (
                        <NewsCard newsItem = {newsItem} key = {newsItem.title}/>
                    ))
                }
            </div>
        </Container>
    )
}

export default NewsContent
