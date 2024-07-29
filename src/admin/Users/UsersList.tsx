import { Table } from "antd";
import EditableCell from "../context/EditableCell";
import EditableRow from "../context/EditableRow";
import { GetMethod } from "../../api/getMethod";
import { userTaskColumn } from "./config";
import { FieldType } from "../../types/types";

export default function UsersList() {
    const { data } = GetMethod<FieldType>('user/all')
    return (
        <Table
            components={{
                body: {
                    row: EditableRow,
                    cell: EditableCell,
                },
            }}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={data?.data?.data}
            columns={userTaskColumn}
        />
    )
}