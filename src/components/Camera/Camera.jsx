import React, { useState } from "react";

const Camera = () => {
  const [organization, setOrganization] = useState("");
  const [site, setSite] = useState("");
  const [area, setArea] = useState("");
  const [url, setUrl] = useState("");

  // Dummy data for dropdown options
  const organizations = ["Org 1", "Org 2", "Org 3"];
  const sites = ["Site 1", "Site 2", "Site 3"];
  const areas = ["Area 1", "Area 2", "Area 3"];

  return (
    <div className="ml-72">
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">Camera</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ml-48">
          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block text-sm font-medium mb-1"
            >
              Organization
            </label>
            <select
              id="organization"
              name="organization"
              className="input"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            >
              <option value="">Select Organization</option>
              {organizations.map((org, index) => (
                <option key={index} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="site" className="block text-sm font-medium mb-1">
              Site
            </label>
            <select
              id="site"
              name="site"
              className="input"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            >
              <option value="">Select Site</option>
              {sites.map((site, index) => (
                <option key={index} value={site}>
                  {site}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="area" className="block text-sm font-medium mb-1">
              Area Name
            </label>
            <select
              id="area"
              name="area"
              className="input"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Select Area</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium mb-1">
              Camera URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter Camera URL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
