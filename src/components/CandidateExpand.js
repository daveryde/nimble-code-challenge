import React from 'react';

// enums
import { colorMapping } from 'utils/enums';

// table ui
import {
    TableRow,
    TableData,
    TableStatus
} from '../ui-kit/Table';

const CandidateExpand = (applicationList) => {
    return (
        <>
            {applicationList.applications.map((application) => {
                return (
                    <TableRow
                        borderLeft
                        key={application.id}>
                        <TableData />
                        <TableData expand>
                            {application.role.title}
                        </TableData>
                        <TableData expand>
                            <TableStatus background={colorMapping[application.new_status.color]} /> {application.new_status.label}
                        </TableData>
                    </TableRow>
                )
            })}
        </>
    )
};

export default CandidateExpand;
