import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {beanieBabies.map((baby) => (
        <p key={baby.id}>{baby.title}</p>
      ))}
    </div>
  );
}
