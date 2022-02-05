import Header from './Header';
import { useContext } from 'react';
import { UserContext } from './UserContext';

function App(props) {
  let user = useContext(UserContext);
  return (
    <>
      <Header />
      <h1>Hello {user.name}</h1>
    </>
  );
}

export default App;
