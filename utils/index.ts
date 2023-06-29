export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "153448cab5mshfe6d8b21a25e09cp1907d8jsnaef90689d269",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
