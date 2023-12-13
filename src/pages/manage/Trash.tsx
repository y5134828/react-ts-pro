import React, { useState } from 'react';
import { ListDate } from './ListDate';
import { ListDateType } from '../../types/list';
import { Typography, Empty, Table, Tag, Button, Space } from 'antd';
import styles from './List.module.scss';

const { Title } = Typography;

export default function Trash() {
  const deleteData: ListDateType[] = ListDate.filter((item) => item.isDeleted);
  const [selectIds, setSelectIds] = useState<string[]>([]);
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '答卷数量',
      dataIndex: 'count',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublish',
      render: (isPublish: boolean) => (
        <Tag color={isPublish ? 'green' : 'red'}>{isPublish ? '已发布' : '未发布'}</Tag>
      ),
    },
    {
      title: '时间',
      dataIndex: 'date',
    },
  ];
  const TableElem = (
    <>
      <div>
        <Space>
          <Button
            type="primary"
            disabled={selectIds.length === 0}
            onClick={() => {
              console.log(selectIds);
            }}
          >
            批量恢复
          </Button>
          <Button
            danger
            disabled={selectIds.length === 0}
            onClick={() => {
              console.log(selectIds);
            }}
          >
            批量删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={deleteData}
        columns={columns}
        rowKey={(q) => q._id}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            setSelectIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={3}>回收站 {selectIds}</Title>
        <span className={styles.right}>
          <input type="text" placeholder="请输入搜索内容" />
        </span>
      </div>
      <div className="list">
        {deleteData.length === 0 && <Empty description="暂无数据" />}
        {deleteData.length > 0 && TableElem}
      </div>
    </div>
  );
}
