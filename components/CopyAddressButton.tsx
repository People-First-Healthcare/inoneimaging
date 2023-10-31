"use client";

import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  classname?: string;
};

function CopyAddressButton({ classname }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(
      "Shop RP25E Roxburgh Village, 250 Somerton Road, Roxburgh Park, VIC 3064"
    );
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 1500);
  }
  return (
    <Button
      className={classname}
      variant={"outline"}
      onClick={() => copyToClipboard()}
    >
      {isCopying ? "Address copied ✅" : "Copy Address"}
    </Button>
  );
}
export default CopyAddressButton;
