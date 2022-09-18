import TopMenu from '../TopMenu/TopMenu.js';

export default function PrivatePage({children}) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
