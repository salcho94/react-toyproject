/* eslint-disable */
import './App.css';
import { useState } from 'react';
import Footer from '../src/components/page/footer';


function App() {

  let post = 'Blog Title';
  let [title, setTitle] = useState(['다','나','가']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  const likePlus = () => {
    setLike(like + 1); 
  }

  const changeTitle = () => {
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    setTitle(copy);
  }

  const changeSort = () => {
    let copy = [...title.sort()];
    setTitle(copy);
  }

  const likeMinus = () => {
    if(like > 0){
      setLike(like - 1); 
    } 
  }

  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color : 'red', fontSize:'16px'}}>logo</h4>
     </div>
     {
     /* <button onClick={changeTitle}>Title Change</button>
     <button onClick={changeSort}>Sort</button> */
     }
     <div className="list">
      <h4>{title[0]} <span onClick={likePlus}>👆</span> <span onClick={likeMinus}>👇</span> {like}</h4>
      <p>content</p>
     </div>
     <div className="list">
      <h4>{title[1]}</h4>
      <p>content</p>
     </div>
     <div className="list">
      <h4 onClick={() =>{ setModal(!modal); console.log(modal);} }>{title[2]}</h4>
      <p>content</p>
     </div>
     {
      modal ? <Modal/>  : null
     }
     
      <Footer/>
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
