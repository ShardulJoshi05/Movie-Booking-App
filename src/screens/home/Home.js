import React from "react";
import Header from "../../common/header/Header.js";
import './Home.css';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import moviesData from "../../common/header/moviesData.js";

class Home extends React.Component {
    render() {
        return (
            <div>
                <>
                    <Header />
                </>
                <div className="um">
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className="f">
                    {
                        moviesData.map((tile) => (
                            <GridListTile key={tile.poster_url} className="a">
                                <img src={tile.poster_url}
                                    alt={tile.title}
                                    className="movie-poster" />
                                <GridListTileBar title={tile.title} />
                            </GridListTile>
                        ))
                    }
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className="gridListMain">
                            {moviesData.map((movie) => (
                                <GridListTile
                                    onClick={() => this.movieClickHandler(movie.id)}
                                    className="released-movie-grid-item"
                                    key={"grid" + movie.id}
                                >
                                    <img
                                        src={movie.poster_url}
                                        className="movie-poster2"
                                        alt={movie.title}
                                    />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={
                                            <span>
                                                Release Date:{" "}
                                                {new Date(movie.release_date).toDateString()}
                                            </span>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;