import React from 'react';
import { Avatar } from '@nextui-org/react';
import ReactCountryFlag from 'react-country-flag';
import { cn } from '@/lib/utils';

const CountryFlag = ({ code, rounded = false, className }) => {
  return (
    <>
      {!rounded ? (
        <ReactCountryFlag countryCode={code} svg className={cn('!h-auto overflow-hidden rounded-lg', className)} />
      ) : (
        <Avatar
          alt={code}
          className={cn('h-6 w-6', className)}
          src={`https://flagcdn.com/${code?.toLowerCase()}.svg`}
        />
      )}
    </>
  );
};

export default CountryFlag;