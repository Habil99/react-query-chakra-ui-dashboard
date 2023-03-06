import React from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { TableColumnsRecord } from "@/lib/models/table";

interface ActionTableProps<TData> {
    data: TData[] | undefined
    columns: TableColumnsRecord<TData>[]
    isLoading: boolean
}

const ActionTable = <TData extends Record<string, any>>({ data, isLoading, columns }: ActionTableProps<TData>) => {
    return (
        <TableContainer sx={{
            "th, td": {
                color: "white",
            }
        }}>
            {isLoading ? (
                <Table>
                    <Thead>
                        <Tr>
                            {columns.map(column => (
                                <Th key={column.key}>{column.title}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Loading...</Td>
                        </Tr>
                    </Tbody>
                </Table>
            ) : (
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            {columns.map(column => (
                                <Th key={column.key}>{column.title}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((record, index) => (
                            <Tr key={record.id}>
                                {columns.map((column, columnIndex) => (
                                    <Td key={column.key}>
                                        {column.render
                                            ? column.render(record[column.dataIndex], record, columnIndex)
                                            : record[column.dataIndex]
                                        }
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}
        </TableContainer>
    )
}

export default ActionTable;