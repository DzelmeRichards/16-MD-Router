import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Character, getCharacter } from '../../Data/CharacterData';
import './characterPage.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const characterApiData = getCharacter(Number(id));

    if (characterApiData) {
      setCurrentCharacter(characterApiData);
    } else {
      navigate('/characters');
    }
  }, []);

  return (

    <div className="character__container container-fluid">
      <div className="row">
        <div className="col-xs-2">
          <div>
            <img src={currentCharacter && currentCharacter.image} alt="not-found" />
          </div>
        </div>
        <div className="col-xs-4">
          <div className="character__info-container">
            <span>
              Character:
              {' '}
              { currentCharacter && currentCharacter.name }
            </span>
            <span>
              Status:
              {' '}
              {currentCharacter && currentCharacter.status}

            </span>
            <span>
              Species:
              {' '}
              {currentCharacter && currentCharacter.species}
            </span>
            <span>
              Gender:
              {' '}
              {currentCharacter && currentCharacter.gender}
            </span>
            <span>
              Origin:
              {' '}
              { currentCharacter && currentCharacter.origin.name }
            </span>
            <span>
              Location:
              {' '}
              { currentCharacter && currentCharacter.location.name }
            </span>
            <span>
              Created:
              {' '}
              { currentCharacter && currentCharacter.created }
            </span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CharacterPage;
