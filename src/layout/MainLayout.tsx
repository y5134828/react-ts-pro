import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Logo from '../conponents/Logo';
import UserInfo from '../conponents/UserInfo';
import styles from './MainLayout.module.scss';

const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>fanye & copy2023</Footer>
    </Layout>
  );
};

export default MainLayout;
