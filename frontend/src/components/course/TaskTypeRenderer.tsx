import LectureCard from "./LectureCard"
import PracticeCard from "./PracticeCard"
import LabCard from "./LabCard"
import ProjectCard from "./ProjectCard"


type Props = {
  taskType: any
}

function TaskTypeRenderer({
  taskType,
}: Props) {

  switch (taskType.name) {

    case "Lecture":

      return (
        <LectureCard
          taskType={taskType}
        />
      )

    case "Homework":

      return (
        <PracticeCard
          taskType={taskType}
        />
      )

    case "Lab Work":

      return (
        <LabCard
          taskType={taskType}
        />
      )

    case "Project":

      return (
        <ProjectCard
          taskType={taskType}
        />
      )

    default:

      return null
    
  }
}

export default TaskTypeRenderer