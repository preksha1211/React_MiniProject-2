import { useState } from "react";
import DialogBox from "./component/DialogBox";

function App() {
  const [action, setAction] = useState("");
  const [open, setOpen] = useState(false);

  function handleClick(type) {
    setAction(type);
    setOpen(true);
  }

  return (
    <>
      <button onClick={() => handleClick("Edit")}>Edit</button>
      <button onClick={() => handleClick("Delete")}>Delete</button>

      {open && (
        <DialogBox
          action={action}
          closeDialog={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default App;