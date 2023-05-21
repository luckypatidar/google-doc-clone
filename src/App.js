import './assets/styles/App.css';
import EditorBar from './components/layout/EditorBar/EditorBar';
import Header from './components/layout/Header/Header';
import TextArea from './components/layout/TextArea/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <EditorBar />
      <TextArea />
    </div>
  );
}

export default App;