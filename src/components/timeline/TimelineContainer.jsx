import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  background-color: red;
  width: 50%;

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;
  }

  &.left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid blue;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent blue;
  }


  &.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid blue;
    border-width: 10px 10px 10px 0;
    border-color: transparent blue transparent transparent;
  }

  &.right::after {
    left: -16px;
  }

  .content {
    padding: 20px 30px;
    color: white;
    background-color: black;
    position: relative;
    border-radius: 6px;
  }
`;

const TimelineContainer =  ({orientation, title, text}) => {
  return (
    <Container className={orientation}>
      <div class="content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Container>
  )
}

export default TimelineContainer;
