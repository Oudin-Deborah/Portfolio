const games = ["Diablo 3", "Fallout 4", "Phasmophobia"];

function GamesList() {
  return (
    <ul className="games-list">
      {games.map((game) => (
        <li key={game} className="games-list__item">
          {game}
        </li>
      ))}
    </ul>
  );
}

export default GamesList;
