import styled from 'styled-components';
const Scoreboard = ({ tries, bestTries }) => {
  return (
    <ScoreBoard>
      <p>Tries: {tries}</p>
      <p>Best: {bestTries[0]}</p>
    </ScoreBoard>
  );
};

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export default Scoreboard;
