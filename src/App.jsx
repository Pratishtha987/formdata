import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";
// import SheetDataViewer from "./components/SheetDataViewer";
// import SheetPage from "./pages/SheetPage";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  // function doPost(e) {
  //   try {
  //     // Get the active spreadsheet and sheet
  //     const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //     const sheet = spreadsheet.getActiveSheet();

  //     // Parse the incoming data from the form
  //     const data = JSON.parse(e.postData.contents);

  //     // Add a timestamp
  //     const timestamp = new Date();

  //     // Append the data as a new row
  //     sheet.appendRow([
  //       timestamp,
  //       data.name,
  //       data.email,
  //       data.phone,
  //       data.message,
  //     ]);

  //     // Return success response
  //     return ContentService.createTextOutput(
  //       JSON.stringify({
  //         status: "success",
  //         message: "Data saved successfully",
  //       })
  //     ).setMimeType(ContentService.MimeType.JSON);
  //   } catch (error) {
  //     // Return error response
  //     return ContentService.createTextOutput(
  //       JSON.stringify({
  //         status: "error",
  //         message: error.toString(),
  //       })
  //     ).setMimeType(ContentService.MimeType.JSON);
  //   }
  // }

  return (
    <>
      {/* <Router> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <SheetDataViewer /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<SheetPage />} /> */}
      {/* </Routes> */}
      {/* <Route path="/sheet" element={<SheetPage />} /> */}
      {/* </Router> */}
      <ContactForm />
    </>
  );
}

export default App;
