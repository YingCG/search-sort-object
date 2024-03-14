import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import { users } from "./data.js";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

function DynamicTable() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  return (
    <div>
      <InputText
        onInput={(e) =>
          setFilters({
            ...filters,
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
      />
      <DataTable
        value={users}
        sortMode="multiple"
        filters={filters}
        paginator
        rows={10}
        rowsPerPageOptions={[3, 5, 8]}
        totalRecords={100}
      >
        <Column field="id" header="ID" sortable />
        <Column field="first_name" header="First Name" sortable />
        <Column field="last_name" header="Last Name" sortable />
        <Column field="email" header="Email" sortable />
        <Column field="gender" header="Gender" sortable />
        <Column field="phone" header="Phone" sortable />
      </DataTable>
    </div>
  );
}

export default DynamicTable;
