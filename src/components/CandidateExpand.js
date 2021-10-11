import React from 'react';

const CandidateExpand = (applicationList) => {
    return (
        <>
            {applicationList.applications.map((application) => {
                return (
                    <tr
                        className="table__row table__row--border"
                        key={application.id}>
                        <td></td>
                        <td className="table__data--expand">
                            {application.role.title}
                        </td>
                        <td className="table__data--expand">
                            {application.new_status.label}
                        </td>
                    </tr>
                )
            })}
        </>
    )
};

export default CandidateExpand;
