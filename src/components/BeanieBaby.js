import { Link } from 'react-router-dom';

export default function BeanieBaby({ baby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanies/${baby.id}`}>
      <p>{baby.title}</p>
      <img className="beanie-img" src={baby.image}></img>
    </Link>
  );
}
