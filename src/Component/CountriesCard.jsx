import styles from "./CountriesCard.module.css";

function CountriesCard({ item }) {
  return (
    <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">{item.country}</b>
      </div>
      <div>
        Population:{" "}
        <b data-testid="country-card-population">{item.population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
