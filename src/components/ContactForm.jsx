import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import CountryDropdown from "./CountryDropdown";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    accountSize: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleCountryChange = (country) => {
    setFormData((prevData) => ({
      ...prevData,
      country: country, // Update the country in formData directly
    }));
  };

  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
  };

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz_VlkDDGLw-jtAkYMnX1DsmbO6hofZ-03hwtsykqLyu4NNUaAalPxX4e5090p_GPBPgg/exec";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const encodedData = {
        name: encodeURIComponent(formData.name),
        email: encodeURIComponent(formData.email),
        country: encodeURIComponent(formData.country),
        phone: encodeURIComponent(formData.phone || ""),
        accountSize: encodeURIComponent(formData.accountSize || ""),
      };

      const queryString = Object.keys(encodedData)
        .map((key) => `${key}=${encodedData[key]}`)
        .join("&");

      const submitUrl = `${SCRIPT_URL}?${queryString}`;

      const response = await fetch(submitUrl, {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        accountSize: "",
      });
      setSubmitStatus("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative pt-3">
      <div className="absolute inset-0 w-full opacity-50 bg-cover bg-center bg-no-repeat">
        <div
          className="max-w-[1320px] bg-center bg-repeat absolute inset-0 opacity-50"
          style={{ backgroundImage: "url('./backgroundImage.png')" }}
        />
      </div>

      <div className="relative top-0 z-10 w-screen max-w-[1320px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left column - Form */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            It begins <span className="text-green-500">here</span>!
          </h1>
          <p className="mb-8 text-gray-300">
            Fill in your details below to begin your future as a career trader
            with Quick Funded.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
                  placeholder="Email address"
                />
              </div>
              <CountryDropdown onCountryChange={handleCountryChange} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* <div className="flex gap-2"> */}
              <div className="">
                <label className="block text-sm mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
                  placeholder="+ Phone number"
                />
                {/* </div> */}
              </div>

              <div>
                <label className="block text-sm mb-2">Account size</label>
                <select
                  name="accountSize"
                  value={formData.accountSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 bg-white/10 rounded border border-gray-600 text-white-dull opacity-60"
                >
                  <option value="" disabled className="text-black">
                    Select account size
                  </option>
                  <option value="$10K" className="text-black">
                    $10K
                  </option>
                  <option value="$25K" className="text-black">
                    $25K
                  </option>
                  <option value="$50K" className="text-black">
                    $50K
                  </option>
                  <option value="$100K" className="text-black">
                    $100K
                  </option>
                  <option value="$200K" className="text-black">
                    $200K
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors disabled:bg-green-800"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitStatus && (
              <p
                className={`mt-4 text-center ${
                  submitStatus.includes("Error")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>

        {/* Right column - Contact */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex mb-8 w-full">
            <img
              src="./moneyflow.png"
              className="w-full max-w-[300px] mt-16 mx-auto"
            />
            <div className="">
              <img src="./logo.png" className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-green-500">us</span>
          </h2>
          <p className="text-gray-300 mb-8">
            For questions and technical assistance on this promotion please
            contact us via the contact information provided below.
          </p>

          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <Phone className="text-green-500" />
              <span>+44(0) 7307577966</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-500" />
              <span>support@quick-funded.io</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-green-500" />
              <span>128 City Road LONDON EC1V 2NX UNITED KINGDOM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

// import React, { useState } from "react";
// import { Phone, Mail, MapPin } from "lucide-react";
// import CountryDropdown from "./CountryDropdown";
// import CountryCodeDropdown from "./CountryCodeDropdown";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     country: "",
//     phone: "",
//     accountSize: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");
//   const [countryCode, setCountryCode] = useState("");

//   const handleCountryChange = (country) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       country: country,
//     }));
//   };

//   const handleCountryCodeChange = (code) => {
//     setCountryCode(code);
//   };

//   const SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbz_VlkDDGLw-jtAkYMnX1DsmbO6hofZ-03hwtsykqLyu4NNUaAalPxX4e5090p_GPBPgg/exec";

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       const encodedData = {
//         name: encodeURIComponent(formData.name),
//         email: encodeURIComponent(formData.email),
//         country: encodeURIComponent(formData.country),
//         phone: encodeURIComponent(formData.phone || ""),
//         accountSize: encodeURIComponent(formData.accountSize || ""),
//       };

//       const queryString = Object.keys(encodedData)
//         .map((key) => `${key}=${encodedData[key]}`)
//         .join("&");

//       const submitUrl = `${SCRIPT_URL}?${queryString}`;

//       const response = await fetch(submitUrl, {
//         method: "GET",
//         mode: "no-cors",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });
//       setFormData({
//         name: "",
//         email: "",
//         country: "",
//         phone: "",
//         accountSize: "",
//       });
//       setSubmitStatus("Form submitted successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       setSubmitStatus("Error submitting form. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative pt-3">
//       <div className="absolute inset-0 w-full opacity-50 bg-cover bg-center bg-no-repeat">
//         <div
//           className="max-w-[1320px] bg-center bg-repeat absolute inset-0 opacity-50"
//           style={{ backgroundImage: "url('./backgroundImage.png')" }}
//         />
//       </div>

//       <div className="relative top-0 z-10 w-screen max-w-[1320px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 md:gap-12">
//         <div className="flex-1">
//           <h1 className="text-5xl font-bold mb-4">
//             It begins <span className="text-green-500">here</span>!
//           </h1>
//           <p className="mb-8 text-gray-300">
//             Fill in your details below to begin your future as a career trader
//             with Quick Funded.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
//                 placeholder="Your name"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
//                   placeholder="Email address"
//                 />
//               </div>
//               <CountryDropdown onCountryChange={handleCountryChange} />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="col-span-1">
//                 <label className="block text-sm mb-2">Country Code</label>
//                 <CountryCodeDropdown
//                   onCountryCodeChange={handleCountryCodeChange}
//                 />
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm mb-2">Phone number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
//                   placeholder="Phone number"
//                   required
//                 />
//               </div>
//             </div>
//             {/* // Inside the ContactForm component */}
//             {/* <div className="grid grid-cols-2 gap-4">
//               <div className="col-span-1">
//                 <label className="block text-sm mb-2">Country Code</label>
//                 <CountryCodeDropdown
//                   onCountryCodeChange={handleCountryCodeChange}
//                 />
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm mb-2">Phone number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 mb-3 bg-white/10 rounded border border-gray-600 text-white"
//                   placeholder="Phone number"
//                   required
//                 />
//               </div>
//             </div> */}
//             <div>
//               <label className="block text-sm mb-2">Account size</label>
//               <select
//                 name="accountSize"
//                 value={formData.accountSize}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mb-4 bg-white/10 rounded border border-gray-600 text-white-dull opacity-60"
//               >
//                 <option value="" disabled className="text-black">
//                   Select account size
//                 </option>
//                 <option value="$10K" className="text-black">
//                   $10K
//                 </option>
//                 <option value="$25K" className="text-black">
//                   $25K
//                 </option>
//                 <option value="$50K" className="text-black">
//                   $50K
//                 </option>
//                 <option value="$100K" className="text-black">
//                   $100K
//                 </option>
//                 <option value="$200K" className="text-black">
//                   $200K
//                 </option>
//               </select>
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors disabled:bg-green-800"
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//             {submitStatus && (
//               <p
//                 className={`mt-4 text-center ${
//                   submitStatus.includes("Error")
//                     ? "text-red-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {submitStatus}
//               </p>
//             )}
//           </form>
//         </div>

//         {/* Right column - Contact */}
//         <div className="flex-1 flex flex-col items-start">
//           <div className="flex mb-8 w-full">
//             <img
//               src="./moneyflow.png"
//               className="w-full max-w-[300px] mt-16 mx-auto"
//             />
//             <div className="">
//               <img src="./logo.png" className="text-white" />
//             </div>
//           </div>
//           <h2 className="text-4xl font-bold mb-4">
//             Contact <span className="text-green-500">us</span>
//           </h2>
//           <p className="text-gray-300 mb-8">
//             For questions and technical assistance on this promotion please
//             contact us via the contact information provided below.
//           </p>

//           <div className="space-y-4 w-full">
//             <div className="flex items-center gap-3">
//               <Phone className="text-green-500" />
//               <span>+44(0) 20 3769 1671</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="text-green-500" />
//               <span>info@quickfunded.com</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <MapPin className="text-green-500" />
//               <span>United Kingdom</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
