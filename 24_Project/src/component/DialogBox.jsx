const DialogBox = ({ action, closeDialog }) => {
  const isEdit = action === "Edit";

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid black",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Cross Button */}
      <button
        onClick={closeDialog}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        ✖
      </button>

      <h1>{isEdit ? "Edit" : "Delete"}</h1>

      <p>
        {isEdit
          ? "Are you sure you want to edit this?"
          : "Are you sure you want to delete this?"}
      </p>

      <button onClick={closeDialog}>No</button>
      <button>Yes</button>
    </div>
  );
};

export default DialogBox;