export interface TableColumnsRecord<TData> {
    title: string;
    dataIndex: keyof TData;
    key: string;
    render?: (text: keyof TData, record: any, index: any) => any;
}