import React from 'react';
import { colorMapping } from 'utils/enums';

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
                        <div className={`table__status table__status--${colorMapping[application.new_status.color]}`} /> {application.new_status.label}
                        </td>
                    </tr>
                )
            })}
        </>
    )
};

export default CandidateExpand;
