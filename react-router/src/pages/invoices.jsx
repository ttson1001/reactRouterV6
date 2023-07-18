import { Link, Outlet } from "react-router-dom";
import { invoices } from "../data/data.jsx";

function Invoices() {
  return (
    <div>
      <h2>Invoices</h2>
      <Link to="new"> New Invoice</Link>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
          {invoices.map(invoice => (
            <Link
              to={invoice.id.toString()}
              key={invoice.id}
              style={{ display: "block", margin: "1rem" }}
            >
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet/>
        
      </div>
    </div>
  );
}

export default Invoices;
