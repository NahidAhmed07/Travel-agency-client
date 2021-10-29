import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({ displayName: "nahid" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    user,
    setUser,
    isMenuOpen,
    setIsMenuOpen,
  };
};

export default useFirebase;
