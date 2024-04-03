import React from "react";

const Quality = () => {
  return (
    <div className="ml-72">
      <div className="container px-4 py-8">
        <h1 className="text-3xl mb-8 text-center">Quality</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="material_name"
            >
              Material Name
            </label>
            <input
              type="text"
              id="material_name"
              name="material_name"
              className="input"
              placeholder="Enter material name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="moisture_percentage_from"
            >
              Moisture Percentage (From)
            </label>
            <input
              type="text"
              id="moisture_percentage_from"
              name="moisture_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="moisture_percentage_to"
            >
              Moisture Percentage (To)
            </label>
            <input
              type="text"
              id="moisture_percentage_to"
              name="moisture_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="vm_percentage_from"
            >
              VM Percentage (From)
            </label>
            <input
              type="text"
              id="vm_percentage_from"
              name="vm_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="vm_percentage_to"
            >
              VM Percentage (To)
            </label>
            <input
              type="text"
              id="vm_percentage_to"
              name="vm_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="ash_percentage_from"
            >
              Ash Percentage (From)
            </label>
            <input
              type="text"
              id="ash_percentage_from"
              name="ash_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="ash_percentage_to"
            >
              Ash Percentage (To)
            </label>
            <input
              type="text"
              id="ash_percentage_to"
              name="ash_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fc_percentage_from"
            >
              FC Percentage (From)
            </label>
            <input
              type="text"
              id="fc_percentage_from"
              name="fc_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fc_percentage_to"
            >
              FC Percentage (To)
            </label>
            <input
              type="text"
              id="fc_percentage_to"
              name="fc_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="size_from"
            >
              Size (From)
            </label>
            <input
              type="text"
              id="size_from"
              name="size_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="size_to">
              Size (To)
            </label>
            <input
              type="text"
              id="size_to"
              name="size_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fe_percentage_from"
            >
              Fe(t) Percentage (From)
            </label>
            <input
              type="text"
              id="fe_percentage_from"
              name="fe_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fe_percentage_to"
            >
              Fe(t) Percentage (To)
            </label>
            <input
              type="text"
              id="fe_percentage_to"
              name="fe_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="loi_percentage_from"
            >
              LOI Percentage (From)
            </label>
            <input
              type="text"
              id="loi_percentage_from"
              name="loi_percentage_from"
              className="input"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="loi_percentage_to"
            >
              LOI Percentage (To)
            </label>
            <input
              type="text"
              id="loi_percentage_to"
              name="loi_percentage_to"
              className="input"
              placeholder="To"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
