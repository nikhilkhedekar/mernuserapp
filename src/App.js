import './App.css';
import DeleteUserData from './deleteUserData';
import GetUserData from './getUserData';
import PatchUserData from './patchUserData';
import PostUserData from './postUserData';
import PutUserData from './putUserData';

function App() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./serviceworker.js")
        .then(registered => {
          console.log("registered", registered)
        })
        .catch(error => {
          console.log("Error", error)
        })
    })
  }
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
