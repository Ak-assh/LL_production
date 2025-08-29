import { useMemo, useState } from "react";

export default function Table({ columns, data, pageSize = 8 }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

  const pageData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  return (
    <div className="card p-4">
      <div className="overflow-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-border">
              {columns.map(col => (
                <th key={col.key} className="table-cell table-head">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, i) => (
              <tr key={i} className="border-b border-border/60">
                {columns.map(col => (
                  <td key={col.key} className="table-cell text-sm">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {pageData.length === 0 && (
              <tr>
                <td className="table-cell text-text-muted" colSpan={columns.length}>
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          className="btn btn-secondary"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          ◀ Prev
        </button>
        <div className="text-sm text-text-muted">
          Page <span className="font-medium text-text">{page}</span> of {totalPages}
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
