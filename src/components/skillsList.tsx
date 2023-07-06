import { skills } from './Objects/skillsObj.js'

export default function SkillsList() {
  const skillsItems = skills.map(skill => (
    <li key={skill.id}>{skill.name}</li>
  ));
  
  return (
    <ol className='grid grid-cols-4 gap-5 list-disc text-2xl font-extrabold font-quicksand text-gray-dark dark:text-gray-main'>
      {skillsItems}
    </ol>
  )
}