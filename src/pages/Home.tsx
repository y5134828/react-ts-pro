import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

const { Title, Paragraph } = Typography;
export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷100份。已发布 98 份，已收到回复1223份</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              nav('/manage/list');
            }}
          >
            开始使用
          </Button>
        </div>
      </div>
    </>
  );
}
