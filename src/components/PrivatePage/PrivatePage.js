import TopMenu from '../TopMenu/TopMenu';

export default function PrivatePage(props) {
  return (
    <>
      <TopMenu />
      {props.children}
    </>
  );
}
