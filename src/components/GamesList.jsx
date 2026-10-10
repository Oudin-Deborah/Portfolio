const Games = ["Diablo 3", "Fallout 4", "Phasmophobia"];

function GamesList() {
  return (
    <ul className="Games-list">
      {Games.map((Game) => (
        <li key={Game} className="Games-list__item">
          {Game}
        </li>
      ))}
    </ul>
  );
}

export default GamesList;
