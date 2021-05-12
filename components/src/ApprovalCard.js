import React from 'react';
import faker from 'faker';
import CommentDetail  from './CommentDetail';

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:12PM" 
                content="Hi, it works."
                avatar={faker.image.avatar()}
            />
            <div className="content">Are you sure?</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;