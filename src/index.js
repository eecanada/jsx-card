import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="eder"
          timeAgo="Today at 4:45pm"
          avatar={faker.image.avatar()}
          comment="great post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="esha"
          timeAgo="Today at 1:45pm"
          avatar={faker.image.avatar()}
          comment="wow that make's so much sense!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="ben"
          timeAgo="Yesterday at 10:45am"
          avatar={faker.image.avatar()}
          comment="follow me at @codinggawd"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
