import TopMenu from '../TopMenu/TopMenu';

<<<<<<< HEAD
export default function PrivatePage({children}) {
  return (
    <>
      <TopMenu />
      {children}
=======
export default function PrivatePage(props) {
  return (
    <>
      <TopMenu />
      {props.children}
>>>>>>> main
    </>
  );
}
