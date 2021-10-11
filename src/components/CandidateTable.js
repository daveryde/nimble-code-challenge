import React, { useState, Fragment } from 'react';

// custom components
import CandidateExpand from './CandidateExpand';

// svgs
import { DownCaret } from 'ui-kit/icons';

// data source
import data from '../data/candidates.json';

const CandidateTable = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [renderable, setRenderable] = useState(0);

    // useEffect(() => {
    //     console.log('renderable :', renderable);
    // }, [renderable])

    const onSubmit = (e) => {
        e.preventDefault();

        // Set state to filter the rows and columns to the query
    }

    return (
        <>
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
                            <Fragment key={result.id}>
                                <tr
                                    className="table__row"
                                    onClick={() => { 
                                        setRenderable(result.id);
                                        setIsDisplayed(!isDisplayed); 
                                    }}
                                >
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
                                </tr>
                                {renderable === result.id && isDisplayed &&
                                    <CandidateExpand
                                        dataID={renderable}
                                        resultID={result.id}
                                        applications={result.applications}
                                        className="table__data--expand"
                                    />
                                }
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default CandidateTable;
