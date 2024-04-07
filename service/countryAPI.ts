import axios from "axios";

const endPoint = "https://api.api-ninjas.com/v1/country";

const fetchCountryAttribute = (countryCode: String) =>
  axios.get(endPoint, {
    headers: {
      "X-Api-Key": process.env.API_NINJA_KEY,
    },
    params: {
      name: countryCode,
    },
  });

export { fetchCountryAttribute };
