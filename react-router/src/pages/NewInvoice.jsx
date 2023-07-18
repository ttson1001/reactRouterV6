function NewInvoice() {
  return (
    <form>
      <label htmlFor="new-invoice">New Invoice Name</label>
      <input type="text" name="new-invoice" id="new-invoice" />
      <input type="submit" value="Create New Invoice" />
    </form>
  );
}

export default NewInvoice;
