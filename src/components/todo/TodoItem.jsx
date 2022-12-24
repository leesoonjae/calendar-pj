import styled from "styled-components";
import { Line } from "../UI/Line";
import { Button } from "../UI/Button";

const TodoItem = () => {
  return (
    <>
      <TodoTitleStyled
        placeholder="제목을 입력해주세요"
        contentEditable={true}
        spellcheck="true"
      />
      <TodoDatePicker type="date" />
      <Line px="10px" />
      <TodoDescritionStyled
        contentEditable={true}
        spellcheck="true"
        type="text"
        placeholder="내용"
      ></TodoDescritionStyled>
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
    left: 10%;
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

// 브랜치 새로 만들었지롱
// 커밋 호호호

export default TodoItem;
