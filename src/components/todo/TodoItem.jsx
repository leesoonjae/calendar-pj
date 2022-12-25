import styled from "styled-components";
import { Line } from "../UI/Line";
import { useState, useEffect, useRef } from "react";
import { Button } from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { __addPosts } from "../../redux/modules/calendarSlice";
import { v4 as uuidv4 } from "uuid";

const TodoItem = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.calendar);

  // console.log(state);

  const [todoTitleValue, setTodoTitleValue] = useState("");
  const [todoDateValue, setTodoDateValue] = useState("");
  const [todoContentValue, setTodoContentValue] = useState("");

  const newTodo = {
    id: uuidv4(),
    title: todoTitleValue,
    date: todoDateValue,
    desc: todoContentValue,
  };

  // 제목이나 내용 입력을 안 했거나 제목을 10글자 이상 작성하지 않았을 때 쓰는 hook(useRef)
  // const todoTitleRef = useRef(null);
  // const todoContentRef = useRef(null);

  // title input창에 있는 현재 value를 받아오는 이벤트
  const handleTitleChange = (event) => {
    setTodoTitleValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDateValue(event.target.value);
  };
  const handleContentChange = (event) => {
    setTodoContentValue(event.target.value);
  };

  const handlePostDeleteButton = () => {
    // dispatch(__deletePosts());
  };

  // password value값 받아서 보내기(input창에)

  // const handleOnClickSaveButton = () => {
  //   dispatch(__addPosts(newTodo));

  //   if (todoTitleValue === "" && todoContentValue === "") {
  //     alert("제목과 내용을 입력해주세요");
  //     return todoTitleRef.current.focus();
  //   }

  //   if (todoTitleValue.length < 10) {
  //     alert("제목을 10글자 이상 작성해주세요");
  //     return todoTitleRef.current.focus();
  //   }

  //   if (todoTitleValue === "") {
  //     alert("제목을 입력해주세요");
  //     return todoTitleRef.current.focus();
  //   }

  //   if (todoContentValue === "") {
  //     alert("내용을 입력해주세요");
  //     return todoContentRef.current.focus();
  //   }

  //   if (todoDateValue === "") {
  //     alert("날짜를 선택해주세요");
  //     return;
  //   }
  // };

  useEffect(() => {
    // unmount 되면서 재랜더링의 발생으로 인해 useState 초기화가 이루어져 값이 초기화됨
    // 그래서 미리 newTodo객체를 로컬스토리지에 저장해놓음
    localStorage.setItem("todo", JSON.stringify(newTodo));
  }, [newTodo]);

  useEffect(() => {
    return () => {
      // 로컬스토리지에 미리 담아놓은 newTodo 객체를 가져옴
      const todo = localStorage.getItem("todo");
      console.log(JSON.parse(todo));
      dispatch(__addPosts(JSON.parse(todo)));
      // 위에서 로컬스토리지에 저장한 todo를 삭제
      localStorage.removeItem("todo");
    };
  }, []);
  // 커밋을 하자

  return (
    <>
      <TodoPostDeleteButtonContainer>
        <Button onClick={handlePostDeleteButton}>삭제</Button>
      </TodoPostDeleteButtonContainer>
      <TodoTitleStyled
        placeholder="제목을 입력해주세요"
        contentEditable={true}
        spellcheck="true"
        onChange={handleTitleChange}
        value={todoTitleValue}
        type="text"
      />
      <TodoDatePicker
        type="date"
        value={todoDateValue}
        onChange={handleDateChange}
      />
      <Line px="10px" />
      <TodoDescritionStyled
        contentEditable={true}
        spellcheck="true"
        type="text"
        placeholder="내용을 입력해주세요"
        value={todoContentValue}
        onChange={handleContentChange}
      ></TodoDescritionStyled>
      {/* <Button onClick={handleOnClickSaveButton}>추가</Button> */}
    </>
  );
};

const TodoDatePicker = styled.input`
  width: 100%;
  padding: 0.5rem 2px;
  margin: 0.5rem 0;
  border: none;
  font-size: 1rem;
  &::placeholder {
    color: rgba(75, 75, 75, 0.214);
  }
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 20%;
    right: auto;
    bottom: auto;
    width: 30%;
    height: 2rem;
    color: rgb(104, 104, 104);
    cursor: pointer;
    background: transparent;
  }
`;

const TodoTitleStyled = styled.input`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  border: none;
  font-size: 40px;
  font-weight: 700;
  &::placeholder {
    color: rgba(75, 75, 75, 0.214);
  }
  &:focus {
    outline: none;
  }
  [contenteditable]:empty:after,
  .forcePlaceholder:after {
    content: attr(placeholder);
  }
`;

const TodoDescritionStyled = styled.textarea`
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  font-size: 28px;
  font-weight: 500;
  border: none;
  resize: none;
  &::placeholder {
    color: rgba(75, 75, 75, 0.214);
  }
  &:focus {
    outline: none;
  }
`;

const TodoPostDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export default TodoItem;
