import React, {memo, useState} from "react";
import {HooHeader} from "src/page/_components/hoo-header";
import {HooContent} from "src/page/_components/hoo-content";
import './App.scss';
import {ConfirmationWindowModal} from "src/page/_components/hoo-content/_components/confirmation-window-modal";

export const App = memo(() => {
  const [isAccess, setIsAccess] = useState(localStorage.getItem('isAccess'));

  const handleSubmit = () => {
    localStorage.setItem('isAccess', 'true');
    setIsAccess('true')
  };

  return (
    <div className="HooClub">
      <HooHeader/>
      <HooContent/>
      {!isAccess&&(
        <ConfirmationWindowModal isModalOpened onSubmit={handleSubmit}/>
      )}
    </div>
  );
});
