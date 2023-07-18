import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../data/data";
import { useEffect, useLayoutEffect } from "react";

function Invoice() {
  let { invoiceId } = useParams();
  const navigate = useNavigate()

  const invoice = invoices.find(
    (invoice) => invoice.id.toString() === invoiceId
  );

  useLayoutEffect(() => {
    if(!invoice) navigate('..')
  }, [invoice])

  return (
    <div>
      <h2 style={{ padding: "1rem" }}>
        {invoice
          ? ` Invoice #${invoice?.id} for ${invoice?.name}`
          : "No invoice now"}
      </h2>
    </div>
  );
}

export default Invoice;
