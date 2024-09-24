"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const useSideBar = () => {
  const [expand, setExpand] = useState<boolean>(false); 
  const pathname = usePathname();

  const page = pathname.split("/").pop();
  const onExpand = () => setExpand((prev) => !prev); 

  return {
    expand,
    onExpand,
    page,
  };
};

export default useSideBar;
