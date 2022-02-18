import React, { useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SortButton from "./SortButton";

const ItemSheet = () => {
  const dispatch = useDispatch();
  const [clickedId, setClickedId] = useState();
  const [clickedRowId, setClickedRowId] = useState();
  const tableData = useSelector((state) => state.data.reservedData);
  const [newData, setNewData] = useState(tableData);

  const keys = Object.keys(MOCK_DATA[0]);

  const isCheckedHandler = (event) => {
    setNewData(tableData);
    const isChecked = event.target.checked;
    const checkedColumn = event.target.id;

    for (let i = 0; i < tableData.length; i++) {
      const reservedColumn = tableData[i][checkedColumn];

      const obj = newData[i];

      const exceptCategory = Object.keys(obj).reduce((acc, key) => {
        if (key === checkedColumn) {
          acc[key] = obj[key];
        }

        return acc;
      }, {});

      setNewData((prevState) => {
        return [exceptCategory, ...prevState];
      });

      if (isChecked) {
        console.log(reservedColumn);
      }
    }
  };

  const setHighLightHandler = (event) => {
    const clickedId = Number(event.target.id);
    setClickedId(clickedId);
  };

  const setRowHighLightHandler = (event) => {
    const clickedTrId = Number(event.target.parentElement.id);
    setClickedRowId(clickedTrId);
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            {keys.map((key, index) => (
              <Th key={index}>
                <div>
                  <span>{key}</span>
                  <span>
                    <input
                      id={key}
                      type="checkbox"
                      onChange={isCheckedHandler}
                    />
                    <SortButton />
                    <SortButton />
                  </span>
                </div>
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {newData.map((data, index) => (
            <Tr
              key={index}
              id={index}
              onClick={setRowHighLightHandler}
              clickedId={clickedRowId}
            >
              {Object.values(data).map((value, index) => (
                <Td
                  key={index}
                  id={index}
                  onClick={setHighLightHandler}
                  clickedId={clickedId}
                >
                  {value}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow: auto;
  height: 90vh;
`;

const Table = styled.table`
  overflow: auto;
`;

const Thead = styled.thead`
  position: sticky;
  top: 1px;
  background-color: #fff;
`;

const Th = styled.th`
  position: sticky;
  padding: 10px;
  outline: 1px solid black;
  text-align: center;
  white-space: nowrap;

  div {
    display: flex;
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

const Tr = styled.tr`
  padding: 100px;
  background-color: ${(props) => props.clickedId === props.id && "#D3DEDC"};
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  outline: 1px solid black;
  white-space: nowrap;

  background-color: ${(props) => props.clickedId === props.id && "#D3DEDC"};
`;

export default ItemSheet;
