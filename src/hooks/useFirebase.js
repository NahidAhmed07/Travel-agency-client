import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({ displayName: "nahid" });

  return {
    user,
    setUser,
  };
};

export default useFirebase;
