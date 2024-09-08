import { ReactNode } from 'react';

type ContactProps = { title: ReactNode; children: ReactNode };

export const Contact = ({ title, children }: ContactProps) => {
  return (
    <>
      <div>{title}:</div>
      <div>{children}</div>
    </>
  );
};
