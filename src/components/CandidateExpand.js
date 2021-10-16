import React from 'react';

// svgs
import { RightCaret } from 'ui-kit/icons';

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
                        <TableData
                            expand
                            borderBottom>
                            {application.role.title}
                        </TableData>
                        <TableData
                            expand
                            borderBottom>
                            <TableStatus background={colorMapping[application.new_status.color]} /> {application.new_status.label}
                        </TableData>
                        <TableData
                            expand
                            borderBottom />
                        <TableData
                            expand
                            borderBottom />
                        <TableData
                            expand
                            borderBottom>
                            <RightCaret className="svg__icon" />
                        </TableData>
                    </TableRow>
                )
            })}
        </>
    )
};

export default CandidateExpand;
