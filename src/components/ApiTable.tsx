import type { ReactNode } from "react";

type ApiTableProps = {
  columns: string[];
  rows: { id: string; cells: ReactNode[] }[];
};

export function ApiTable({ columns, rows }: ApiTableProps) {
  return (
    <div className="docs-api-table">
      <table className="docs-api-table__table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) =>
                index === 0 ? (
                  <th key={index} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={index}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
