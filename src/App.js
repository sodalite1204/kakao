import './App.css';

function App() {
  const getKakaoToken = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/oauth',
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
