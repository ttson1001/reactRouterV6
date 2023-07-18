import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./pages/invoices";
import Expenses from "./pages/expenses";
import NotFound from "./pages/NotFound";
import Invoice from "./pages/Invoice";
import NewInvoice from "./pages/NewInvoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<h2 style={{padding: '1rem'}}> Please chosse ivoice </h2>} />
             <Route path=":invoiceId" element={<Invoice/>}/>
             <Route path="new" element={<NewInvoice />} />
             </Route>
          <Route path="expenses" element={<Expenses />} />
          {/* No other routes match */}
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
