import { Link }
  from "@tanstack/react-router"

import LectureCard
  from "./LectureCard"

import PracticeCard
  from "./PracticeCard"

import LabCard
  from "./LabCard"

import ProjectCard
  from "./ProjectCard"

type Props = {
  taskType: any
}

function TaskTypeRenderer({
  taskType,
}: Props) {

  switch (taskType.name) {

    case "Lecture":

      return (

        <Link
          to="/tasks"
          search={{
            taskTypeId:
              String(taskType.id),
          }}
          className="block"
        >

          <LectureCard
            taskType={taskType}
          />
        </Link>
      )

    case "Homework":

      return (

        <Link
          to="/tasks"
          search={{
            taskTypeId:
              String(taskType.id),
          }}
          className="block"
        >

          <PracticeCard
            taskType={taskType}
          />
        </Link>
      )

    case "Lab Work":

      return (

        <Link
          to="/tasks"
          search={{
            taskTypeId:
              String(taskType.id),
          }}
          className="block"
        >

          <LabCard
            taskType={taskType}
          />
        </Link>
      )

    case "Project":

      return (

        <Link
          to="/tasks"
          search={{
            taskTypeId:
              String(taskType.id),
          }}
          className="block"
        >

          <ProjectCard
            taskType={taskType}
          />
        </Link>
      )

    default:

      return null
  }
}

export default TaskTypeRenderer