import './App.css';

function App() {
  const getKakaoToken = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: 'https://dazzling-squirrel-96a9da.netlify.app/oauth',
      prompts: 'none',
      throughTalk: true,
    });
  };
  return (
    <div className='App'>
      <button onClick={getKakaoToken}>로그인</button>
    </div>
  );
}

export default App;
