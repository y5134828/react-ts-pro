import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const QuestionLayout: FC = () => {
  return (
    <div>
      <div className="header">header</div>
      <div className="cont">
        <Outlet />
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default QuestionLayout;
