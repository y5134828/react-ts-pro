import React from 'react';
import QuestionCard from '../../conponents/QuestionCard';
import { ListDate } from './ListDate';
import { ListDateType } from '../../types/list';
import { Typography } from 'antd';
import styles from './List.module.scss';

const { Title } = Typography;
export default function List() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={3}>问卷列表</Title>
        <span className={styles.right}>
          <input type="text" placeholder="请输入搜索内容" />
        </span>
      </div>
      <div className="list">
        {ListDate.length > 0 &&
          ListDate.map((item: ListDateType) => {
            return <QuestionCard key={item._id} item={item} />;
          })}
      </div>
    </div>
  );
}
