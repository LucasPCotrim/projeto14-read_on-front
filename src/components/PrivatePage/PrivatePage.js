import TopMenu from '../TopMenu/TopMenu';

export default function PrivatePage({children}) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
