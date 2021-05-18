import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail  from './CommentDetail';   // './' mean the relative path
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Do you really do this?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:12PM" 
                    content="Hi, it works."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 1:12PM" 
                content="Nice!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 8:52PM" 
                content="Cool!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));