import {
  PlusCircleOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Table as AntTable, Button, Card, Input, Tooltip } from "antd";
import { ColumnType, TablePaginationConfig } from "antd/lib/table";
import { FilterValue } from "antd/lib/table/interface";

type Size = "large" | "middle" | "small";
export type DrawerType = "detail" | "add" | "edit" | "close";

type TableProps = {
  loading?: boolean;
  size?: Size;
  rowSelection?: object;
  components?: object;
  columns: object[];
  data: object[];
  pagination: false | TablePaginationConfig;
  onChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any
  ) => void;
  addAction?: (type: DrawerType) => void;
  onRefresh?: (pagination?: any, filters?: any, sorter?: any) => void;
};

const ExtraTable: React.FC<TableProps> = (props: TableProps) => (
  <>
    {props.addAction && (
      <Tooltip title="Add">
        <Button
          type="primary"
          size="middle"
          onClick={() => props.addAction && props.addAction("add")}
          icon={<PlusCircleOutlined />}
        >
          Add
        </Button>
      </Tooltip>
    )}
    {props.onRefresh && (
      <Tooltip title="Refresh">
        <Button
          type="text"
          size="small"
          shape="circle"
          onClick={props.onRefresh}
        >
          <ReloadOutlined />
        </Button>
      </Tooltip>
    )}
    <Tooltip title="Refresh">
      <Button type="text" size="small" shape="circle" onClick={props.onRefresh}>
        <ReloadOutlined />
      </Button>
    </Tooltip>
  </>
);

const Table: React.FC<TableProps> = (props: TableProps) => {
  return (
    <Card className="table-card" bordered={false} extra={ExtraTable(props)}>
      <AntTable
        rowKey={(record: any) => record.uid}
        loading={props.loading}
        size={props.size || "middle"}
        components={props.components}
        rowSelection={props.rowSelection}
        columns={props.columns}
        dataSource={props.data}
        pagination={props.pagination}
        onChange={props.onChange}
      />
    </Card>
  );
};

export default Table;
