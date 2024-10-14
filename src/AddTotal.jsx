/* eslint-disable react/prop-types */
function AddTotal({ totalAmount }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center underline text-teal-500">
        Total Amount: ${totalAmount}
      </h2>
    </div>
  );
}

export default AddTotal;
