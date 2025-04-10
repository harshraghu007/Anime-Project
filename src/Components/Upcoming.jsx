/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';
import { useGlobalContext } from '../context/global';
import { Link } from 'react-router-dom';

const Upcoming = ({ rendered }) => {
  const { upcomingAnime, isSearch, searchResult } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'upcoming') {
      return upcomingAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    } else {
      return searchResult.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };

  return (
    <PopularStyled>
      <div className="upcoming-anime">{conditionalRender()}</div>
    </PopularStyled>
  );
};

const PopularStyled = styled.div`
  display: flex;

  .upcoming-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;

    a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }

    a img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export default Upcoming;
