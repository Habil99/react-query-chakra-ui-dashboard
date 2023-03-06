export interface TableColumnsRecord<TData> {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: string, record: any, index: any) => any;
}