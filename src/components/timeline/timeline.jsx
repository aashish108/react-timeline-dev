import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TimelineContainer from './TimelineContainer';

const TimelineGraph = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: blue;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const Timeline =  () => {
  const [eventArray, setEventArray] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => { setEventArray([...eventArray, {
      title: new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now()),
      text: 'Lorem ipsum'
    }])}, 5000);

    if (eventArray.length === 6) {
      const newEventArray = eventArray.reverse().splice(0, 5);
      setEventArray(newEventArray);
    }

    return () => clearTimeout(timer);
   },[eventArray]);

  const orientationCalc = (number) => {
    if (number % 2 === 0) {
      return 'left';
    }
    return 'right';
  }

  return (
    <TimelineGraph>
      {eventArray.reverse().map((data, x) => <TimelineContainer key={x} orientation={orientationCalc(x)} title={data.title} text={data.text} />)}
    </TimelineGraph>
  )
}

export default Timeline;
