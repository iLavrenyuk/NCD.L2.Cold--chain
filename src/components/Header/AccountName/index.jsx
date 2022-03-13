import React from 'react';
import { useStore } from '../../../store';
import { signOut } from '../../../services/near';
import { ReactComponent as LogoutSvg } from '../../../assets/svg/logout.svg';

export const AccountName = () => {
  const { accountId, setAccountId } = useStore();

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };
  return (
    <>
      <div className="w-3 h-3 bg-green-400 rounded-full" />
      <p className="text-lg font-bold">{accountId}</p>
      <LogoutSvg onClick={handleSignOut} className="md cursor-pointer" />
    </>
  );
};
