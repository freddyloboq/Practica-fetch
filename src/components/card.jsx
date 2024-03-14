export const Card = ({ character }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            {character.status} - {character.species} - {character.type}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};