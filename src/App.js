import './App.css';
import DeleteUserData from './deleteUserData';
import GetUserData from './getUserData';
import PatchUserData from './patchUserData';
import PostUserData from './postUserData';
import PutUserData from './putUserData';

function App() {
  
  return (
    <div className="App">
      <PostUserData />
      <PutUserData />
      <PatchUserData />
      <GetUserData />
      <DeleteUserData />
    </div>
  );
}

export default App;
