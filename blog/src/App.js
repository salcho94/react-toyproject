/* eslint-disable */
import './App.css';
import { useState } from 'react';
import Footer from '../src/components/page/footer';


function App() {

  let post = 'Blog Title';
  let [title, setTitle] = useState(['1번째 글 제목 입니다.','2번째 글 제목 입니다.','3번째 글 제목 입니다.']);
  let [content, setContent] = useState(['1번째 글 내용 입니다.','2번째 글 내용 입니다.','3번째 글 내용 입니다.']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [state,setState] = useState(0);



  const likePlus = (num) => {
     let likeList = [...like];
     likeList[num] = Number(like[num]) + 1;
     setLike(likeList);
  }

  const likeMinus = (num) => {
    if(like[num] > 0){
      let likeList = [...like];
      likeList[num] = Number(like[num]) - 1;
      setLike(likeList);
    }else{
        alert('싫어요는 0이하가 될수 없습니다!');
        return false;
    }
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



  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color : 'red', fontSize:'16px'}}>{post}</h4>
     </div>
     {
     /* <button onClick={changeTitle}>Title Change</button>
     <button onClick={changeSort}>Sort</button> */
     }
    {
        title.map((x,i) => {
            return(
                <>
                    <div className="likeList">
                        <span onClick={() =>  {likePlus(i)}}>👍</span>
                        <span onClick={() =>  {likeMinus(i)}}>👎</span>
                        {like[i]}
                    </div>
                    <div onClick={() =>{ setModal(!modal); setState(i);} } className="list" key={i}>
                        <h4>{title[i]}

                        </h4>

                        <p>{content[i]}</p>
                    </div>
                </>
            )
        })
    }
        {
            modal ? <Modal title={title} content={content} state={state} changeTitle={changeTitle} color={'skyblue'} />  : null
        }
     
      <Footer/>
    </div>
  );
}


const Modal = (props) => {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.state]}</h4>
      <p>{props.content[props.state]}</p>
      <p>날짜</p>
      <button onClick={props.changeTitle}>글 수정</button>
    </div>
  )
}

export default App;
