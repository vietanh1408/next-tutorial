export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_INDEX = 1;

export const defaultPagination = {
  showTotal: (total: number, range: [number, number]) =>
    `${range[0]}-${range[1]} of ${total} items`,
  defaultPageSize: 20,
  pageSizeOptions: ["20", "50", "100"],
  defaultCurrent: 1,
  showSizeChanger: true,
};
