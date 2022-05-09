import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  characters, Location, Origin, Character, getCharacters, getCharacter,
} from '../../Data/CharacterData';
import './charactersPage.scss';

// 01:48:19

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const charactersApiData = getCharacters();
    setVisibleCharacters(charactersApiData);
  }, []);

  return (
    <div className="characters__container center-xs">
      <div className="row">
        <div className="col-xs-12">
          <h1>
            Characters Page
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="characters__card-container">
            {visibleCharacters && visibleCharacters.map(({
              id, name, status, species, gender, image, location, created,
            }) => (
              <div
                className="characters__card"
                key={Math.random()}
              >
                <img src={image} alt="not-found" />
                <span>
                  ID:
                  {' '}
                  {id}

                </span>
                <span>
                  Name:
                  {' '}
                  {name}
                </span>

                <button
                  className="characters__button"
                  onClick={() => navigate(`/characters/${id}`)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
