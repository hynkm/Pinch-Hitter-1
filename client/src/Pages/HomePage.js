import { MainPosts } from './MainPost';
import Header from '../Components/header';
import { useEffect } from 'react';
import axios from 'axios';

let url = 'https://localhost:4000';

function HomePage({
  hadleLoginVerification,
  isLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
  setCurrentPost,
}) {
  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      <MainPosts allPost={allPost} setCurrentPost={setCurrentPost} />
    </>
  );
}

export default HomePage;
