import React from 'react';

const CandidateExpand = (applicationList) => {
    return (
        <>
            {applicationList.applications.map((application) => {
                return (
                    <tr key={application.id}>
                        <td></td>
                        <td>
                            {application.role.title}
                        </td>
                        <td>
                            {application.new_status.label}
                        </td>
                    </tr>
                )
            })}
        </>
    )
};

export default CandidateExpand;
