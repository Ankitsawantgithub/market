import React from "react";

//INTERNAL IMPORT

import { Button,Category,Brand } from "../../components/iComponentsIndex";

import NFTDetailsPage from "../../NFTDetailsPage/NFTDetailsPage";
const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
      <Button/>
    </div>
  );
};

export default NFTDetails;