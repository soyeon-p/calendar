import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import axios from 'axios';
import Filter from '../Components/Dust/Filter';
import Content from '../Components/Dust/Content';
import { useRecoilState } from 'recoil';
import { dustDataState } from '../Recoil/atoms';

/*
0 ~ 30 좋음
31 ~ 80 보통
81 ~ 150 나쁨
151이상 매우나쁨
*/

const Dust = () => {
  const [dustData, setDustData] = useRecoilState(dustDataState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            response: {
              body: { items: dustData },
            },
          },
        } = await axios.get('http://localhost:3065/dust');
        setDustData(dustData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [setDustData]);

  return (
    <Container>
      <Filter />
      <Content />
    </Container>
  );
};

export default Dust;
