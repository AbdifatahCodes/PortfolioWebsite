import { skills } from './skillsObj.js'

export default function SkillsList() {
  const skillsItems = skills.map(skill => (
    <li role='skillsListItem' key={skill.id}>{skill.name}</li>
  ));
  
  return (
    <ul role='skillsList' className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 ms:gap-3 md:gap-5 list-disc text-sm ms:text-lg md:text-base lg:text-2xl font-bold md:font-extrabold font-quicksand text-gray-dark dark:text-gray-main'>
      {skillsItems}
    </ul>
  )
}