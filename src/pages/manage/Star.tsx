import React from 'react';
import QuestionCard from '../../conponents/QuestionCard';
import { ListDate } from './ListDate';
import { ListDateType } from '../../types/list';
import { Typography, Empty } from 'antd';
import styles from './List.module.scss';

const { Title } = Typography;

export default function Star() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={3}>星标问卷</Title>
        <span className={styles.right}>
          <input type="text" placeholder="请输入搜索内容" />
        </span>
      </div>
      <div className="list">
        {ListDate.filter((item) => item.isStar).length === 0 && <Empty description="暂无数据" />}
        {ListDate.length > 0 &&
          ListDate.filter((item) => item.isStar).map((item: ListDateType) => {
            return <QuestionCard key={item._id} item={item} />;
          })}
      </div>
    </div>
  );
}
