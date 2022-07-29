import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef, Space } from "antd";

type FilterDropdownType = {
  setSelectedKeys: (val: string[]) => void;
  selectedKeys: string;
  confirm: () => void;
  clearFilters: () => void;
};

let searchedColumn = "";
let searchText = "";
const searchInput: { current: InputRef | null } = { current: null };

const useSyncSearchWithApi = (
  dataIndex: string,
  callBackValue: (value: string, type?: any) => void,
  syncValue?: string,
  isArticles = false
) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(syncValue || "");
  }, [syncValue]);
  const placeholderInput = () => {
    return isArticles ? "name" : dataIndex;
  };
  return {
    filterDropdown: ({ confirm, clearFilters }: FilterDropdownType) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput.current = node;
          }}
          placeholder={`Search ${placeholderInput()}`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value || "");
          }}
          onPressEnter={() => {
            callBackValue(value, dataIndex);
            confirm();
          }}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => {
              callBackValue(value, dataIndex);
              confirm();
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              callBackValue("", dataIndex);
              confirm();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => (
      <SearchOutlined
        style={{ color: syncValue ? "#1890ff" : undefined }}
        className=""
      />
    ),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string) => {
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ?? ""}
        />
      ) : (
        text
      );
    },
  };
};

export default useSyncSearchWithApi;
