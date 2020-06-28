import React from "react";
import { FrappeGantt, Task, ViewMode } from "../node_modules/frappe-gantt-react";

const tasks = [
	{
	  id: "P1",
	  name: "P1: Sign Contract",
	  start: "2020-02-03",
	  end: "2020-02-05",
	  progress: 50,
	  dependencies: ""
	},
	{
	  id: "P2",
	  name: "P2: Initial Features Review Meeting",
	  start: "2020-02-06",
	  end: "2020-02-06",
	  progress: 0,
	  dependencies: "P1"
	},
	{
	  id: "U1",
	  name: "U1: UI Wireframes",
	  start: "2020-02-07",
	  end: "2020-02-11",
	  progress: 0,
	  dependencies: "P2"
	},
	{
	  id: "U2",
	  name: "U2: UI Design Review",
	  start: "2020-02-12",
	  end: "2020-02-14",
	  progress: 0,
	  dependencies: "U1"
	},
	{
	  id: "C1",
	  name: "C1: Setup Repositories",
	  start: "2020-02-06",
	  end: "2020-02-06",
	  progress: 0,
	  dependencies: "P1"
	},
	{
	  id: "C2",
	  name: "C2: Create Code Environment",
	  start: "2020-02-07",
	  end: "2020-02-09",
	  progress: 0,
	  dependencies: "C1"
	},
	{
	  id: "C2",
	  name: "C2: Code UI",
	  start: "2020-02-15",
	  end: "2020-02-19",
	  progress: 0,
	  dependencies: "C2, U2"
	},
	{
	  id: "C3",
	  name: "C3: Setup Database",
	  start: "2020-02-07",
	  end: "2020-02-07",
	  progress: 0,
	  dependencies: "P1"
	},
	{
	  id: "C4",
	  name: "C4: Code Business Logic",
	  start: "2020-02-10",
	  end: "2020-02-16",
	  progress: 0,
	  dependencies: "C3, C2"
	},
	{
	  id: "Q1",
	  name: "Q1: Development Testing",
	  start: "2020-02-06",
	  end: "2020-02-20",
	  progress: 0,
	  dependencies: "P1"
	},
	{
	  id: "Q12",
	  name: "Q2: Release",
	  start: "2020-02-21",
	  end: "2020-02-21",
	  progress: 0,
	  dependencies: "C2, Q1"
	},
	{
	  id: "C5",
	  name: "C5: Integrate Business Logic to UI",
	  start: "2020-02-03",
	  end: "2020-02-10",
	  progress: 0,
	  dependencies: ""
	},
	{
	  id: "C6",
	  name: "C6: Code UI Tweaks",
	  start: "2020-02-03",
	  end: "2020-02-06",
	  progress: 0,
	  dependencies: ""
	},
	{
	  id: "U3",
	  name: "U3: Tweak UI Design",
	  start: "2020-02-03",
	  end: "2020-02-03",
	  progress: 0,
	  dependencies: ""
	},
	{
	  id: "P3",
	  name: "P3: Client Pre-release Review",
	  start: "2020-02-03",
	  end: "2020-02-03",
	  progress: 0,
	  dependencies: ""
	}
  ] as Task[];

class App extends React.Component<any, any>
{
  state = { mode: ViewMode.Day };
  
  render() {
    return (
      <div>
        <FrappeGantt
          tasks={tasks}
          viewMode={this.state.mode}
          onClick={task => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={tasks => console.log(tasks)}
        />
      </div>
    );
  }
}

export default App;
