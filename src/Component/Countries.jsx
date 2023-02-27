import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&sort=population&order=asc`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res=>", res);
        setData(res.data);
        setTotalPages(res.totalPages);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {data.map((item, index) => (
          <CountriesCard item={item} key={index} />
        ))}
      </div>
      <div>
        {/* Pagination */}
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Countries;
