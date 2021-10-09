import React from 'react';

const CandidateExpand = (applicationList) => {
    let data = applicationList.applications.map(item => item);
    console.log(data);
    return (
        <>
            {applicationList.applications.map(item => {
                return (
                    <div className="table__data--expand">
                        {item.role.title}
                        {item.new_status.label}
                    </div>
                )
            })}
        </>
    )
};

export default CandidateExpand;
