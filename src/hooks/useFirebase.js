import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({ name: "nahid" });

  return {
    user,
    setUser,
  };
};

export default useFirebase;
