import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import projectsData from "../../data/projects";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All",
    };

    this.filters = [
      "All",
      ...new Set(projectsData.map((project) => project.category)),
    ];
  }

  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { selected } = this.state;

    const filteredProjects =
      selected === "All"
        ? projectsData
        : projectsData.filter((project) => project.category === selected);

    return (
      <div className="portfolio-container">
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}
