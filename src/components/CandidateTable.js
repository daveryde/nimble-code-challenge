import React, { useState } from 'react';

// custom components
import CandidateExpand from './CandidateExpand';

// svgs
import { DownCaret } from 'ui-kit/icons';

// data source
import data from '../data/candidates.json';

const CandidateTable = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        // Set state to filter the rows and columns to the query
    }

    return (
        <div>
            <p>{data.count} Candidates</p>

            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search by candidate or keyword" />
                <input type="submit" />
            </form>

            <table className="table">
                <thead>
                    <tr className="table__row">
                        <th className="table__head">
                            <input
                                type="checkbox"
                                onClick={() => setAllChecked(!allChecked)}
                            />
                        </th>
                        <th className="table__head">
                            Candidate Name <DownCaret className="svg__icon" />
                        </th>
                        <th className="table__head">
                            Status
                        </th>
                        <th className="table__head">
                            # Apps <DownCaret className="svg__icon" />
                        </th>
                        <th className="table__head">
                            Last Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.results.map(result => {
                        return (
                            <>
                                <tr className="table__row" onClick={() => setIsRendered(!isRendered)}>
                                    <td className="table__data">
                                        <input type="checkbox" checked={allChecked} />
                                    </td>
                                    <td className="table__data">
                                        {result.name}
                                    </td>
                                    <td className="table__data">
                                        {result.applications[0].new_status.label}
                                    </td>
                                    <td className="table__data">
                                        {result.applications.length}
                                    </td>
                                    <td className="table__data">
                                        {result.applications[0].updated}
                                    </td>

                                    {isRendered &&
                                        <CandidateExpand
                                            applications={result.applications}
                                        />
                                    }
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default CandidateTable;
