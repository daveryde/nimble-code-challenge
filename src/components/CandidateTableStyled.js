import React, { Fragment, useState } from 'react';

// custom components
import CandidateExpand from './CandidateExpand';

// svgs
import { DownCaret, SearchIcon, PlusSign, MinusSign } from 'ui-kit/icons';

// data source
import data from '../data/candidates.json';

// enums
import { colorMapping } from 'utils/enums';

// table ui
import {
    UtilitySection,
    TableInfo,
    TableCountText,
    TableFilterText,
    TableSearchForm,
    TableSearchInput,
    TableSearchButton,
    TableContainer,
    TableBody,
    TableRow,
    TableHead,
    TableData,
    TableStatus
} from '../ui-kit/Table';

const CandidateTableStyled = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [renderable, setRenderable] = useState(0);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [query, setQuery] = useState('');

    return (
        <>
            <UtilitySection>
                <TableInfo>
                    <TableCountText>{data.count} Candidates</TableCountText>
                    <TableFilterText onClick={() => setQuery('')}>Clear All Filter</TableFilterText>
                </TableInfo>
                <TableSearchForm>
                    <TableSearchInput
                        type="text"
                        placeholder="Search by candidate or keyword"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <TableSearchButton>
                        <SearchIcon className="svg__icon svg__icon--search" />
                    </TableSearchButton>
                </TableSearchForm>
            </UtilitySection>
            <TableContainer>
                <TableBody>
                    <thead>
                        <TableRow borderY>
                            <TableHead>
                                <input
                                    type="checkbox"
                                    onClick={() => setAllChecked(!allChecked)}
                                />
                                <DownCaret className="svg__icon" />
                            </TableHead>
                            <TableHead>
                                Candidate Name <DownCaret className="svg__icon" />
                            </TableHead>
                            <TableHead>
                                Status
                            </TableHead>
                            <TableHead>
                                # Apps <DownCaret className="svg__icon" />
                            </TableHead>
                            <TableHead>
                                Last Action
                            </TableHead>
                        </TableRow>
                    </thead>
                    <tbody>
                        {data.results.map(result => {
                            return (
                                <Fragment key={result.id}>
                                    <TableRow
                                        borderY
                                        onClick={() => {
                                            setRenderable(result.id);
                                            setIsDisplayed(!isDisplayed);
                                        }}>
                                        <TableData>
                                            <input type="checkbox" checked={allChecked} />
                                        </TableData>
                                        <TableData>
                                            {result.name}
                                        </TableData>
                                        <TableData>
                                            <TableStatus background={colorMapping[result.applications[0].new_status.color]} /> {result.applications[0].new_status.label}
                                        </TableData>
                                        <TableData>
                                            {result.applications.length}
                                        </TableData>
                                        <TableData>
                                            {result.applications[0].updated}
                                        </TableData>
                                        <TableData>
                                            {renderable === result.id && isDisplayed ? <MinusSign /> : <PlusSign />}
                                        </TableData>
                                    </TableRow>
                                    {renderable === result.id && isDisplayed &&
                                        <CandidateExpand applications={result.applications} />
                                    }
                                </Fragment>
                            )
                        })}
                    </tbody>
                </TableBody>
            </TableContainer>
        </>
    )
};

export default CandidateTableStyled;
