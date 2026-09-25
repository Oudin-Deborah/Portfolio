const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT.JSX"];

function SkillsList() {
  return (
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill} className="skills-list__item">
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;
