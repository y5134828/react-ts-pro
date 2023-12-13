import React from 'react';
import { ListDateType } from '../types/list';
import { Button, Space, Tag, Modal } from 'antd';
import { EditOutlined, LineChartOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import styles from './QuestionCard.module.scss';

export default function QuestionCard({ item }: { item: ListDateType }) {
  const nav = useNavigate();

  function copyQuestion() {
    Modal.confirm({
      title: '是否复制',
      onOk() {
        alert('OK');
      },
    });
  }

  function deleteQuestion() {
    Modal.confirm({
      title: '是否删除',
      onOk() {
        alert('OK');
      },
    });
  }
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <span className={styles['left']}>
          <Link to={item.isPublish ? `/question/stat/${item._id}` : `/question/edit/${item._id}`}>
            <Space>
              {item.isStar && <StarOutlined style={{ color: 'red' }} />}
              {item.title}
            </Space>
          </Link>
        </span>
        <div className={styles['right']}>
          <span className={item.isPublish ? styles['isPublish'] : ''}>
            <Tag color={item.isPublish ? 'processing' : ''}>
              {item.isPublish ? '已发布' : '未发布'}
            </Tag>
          </span>
          <span>答卷：{item.count}</span>
          <span>{item.date}</span>
        </div>
      </div>
      <div className={styles['card-body']}>
        <div className={styles['left']}>
          <Space>
            <Button
              type="primary"
              ghost
              icon={<EditOutlined />}
              onClick={() => nav(`/question/edit/${item._id}`)}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              icon={<LineChartOutlined />}
              disabled={!item.isPublish}
              onClick={() => nav(`/question/stat/${item._id}`)}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles['right']}>
          <Button className={styles['opitem']} icon={<StarOutlined />}>
            {item.isStar ? '取消标星' : '标星'}
          </Button>
          <Button className={styles['opitem']} onClick={copyQuestion}>
            复制
          </Button>
          <Button className={styles['opitem']} onClick={deleteQuestion}>
            删除
          </Button>
        </div>
      </div>
    </div>
  );
}
