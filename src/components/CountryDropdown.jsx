// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CountryDropdown({ formData, handleChange }) {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     // Fetch country list from the REST Countries API
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         // Sort countries alphabetically
//         const countryList = response.data
//           .map((country) => country.name.common)
//           .sort();
//         setCountries(countryList);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   return (
//     <div>
//       <label className="block text-sm mb-2">Country</label>
//       <select
//         name="country"
//         value={formData.country}
//         onChange={handleChange}
//         required
//         className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white appearance-none"
//       >
//         <option value="" disabled hidden>
//           Select your country
//         </option>
//         {countries.map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default CountryDropdown;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CountryDropdown() {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");

//   useEffect(() => {
//     // Fetch country list from the REST Countries API
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         const countryList = response.data
//           .map((country) => country.name.common)
//           .sort();
//         setCountries(countryList);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     // Add logic here to save the selected country if needed, e.g., form submission or local storage
//   };

//   return (
//     <div>
//       <label className="block text-sm mb-2">Country</label>
//       <select
//         name="country"
//         value={selectedCountry}
//         onChange={handleCountryChange}
//         required
//         className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-black appearance-none"
//       >
//         <option value="" disabled hidden>
//           Select your country
//         </option>
//         {countries.map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default CountryDropdown;

import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryDropdown({ selectedCountry, onCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryList = response.data
          .map((country) => country.name.common)
          .sort();
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div>
      <label className="block text-sm mb-2">Country</label>
      <select
        name="country"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        required
        className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white opacity-60 appearance-none"
      >
        <option value="" disabled className="text-black">
          Select your country
        </option>
        {countries.map((country) => (
          <option key={country} value={country} className="text-black">
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryDropdown;
