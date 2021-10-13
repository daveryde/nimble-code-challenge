import styled from 'styled-components';

const UtilitySection = styled.section`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    width: 100%;
    margin-left: 2.5rem;
`;

const TableInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    max-width: 90vw;
`;

const TableCountText = styled.p`
    font-size: .9rem;
 `;

const TableFilterText = styled.p`
    font-size: .9rem;
    cursor: pointer;
 `;

const TableSearchForm = styled.form`
    display: flex;
    width: 100%;
 `;

const TableSearchInput = styled.input`
    min-width: 90%;
    height: 3rem;
    padding: .5rem;
    border: .1rem solid #e6e6e6;
    font-size: 1.2rem;

    &::placeholder {
        padding: .5rem;
        color: #dddddd;
        font-size: 1rem;
        letter-spacing: .0500rem;
    }
 `;

const TableSearchButton = styled.button`
    background: #2fb88d;
    padding: .5rem 1.2rem;
    border: none;
 `;

const TableContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
 `;

const TableBody = styled.table`
    width: 96vw;
    margin: 2rem 0;
    border-collapse: collapse;
 `;

const TableRow = styled.tr.attrs(props => ({
    borderLeft: props.borderLeft ? ".5rem solid #e2e2e2" : "none",
    borderBottom: props.borderBottom ? ".1rem solid #e6e6e6" : "none",
}))`
    padding: 1rem;
    width: 100%;
    border-bottom: ${props => props.borderBottom};

    td:nth-child(2) {
        border-left: ${props => props.borderLeft};
    }
`;

const TableHead = styled.th`
    padding: .8rem .5rem;
    text-align: left;
 `;

const TableData = styled.td.attrs(props => ({
    expand: props.expand,
    borderBottom: props.borderBottom ? ".1rem solid #e6e6e6" : "none",
}))`
    max-width: 8rem;
    background: ${props => props.expand ? "#FFF" : "none"};
    padding: .7rem .5rem;
    border-bottom: ${props => props.borderBottom};
 `;

const TableStatus = styled.div.attrs(props => ({
    background: props.background
}))`
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background: ${props => props.background};
    margin-right: .5rem;
    border-radius: 50%;
 `;

export {
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
};