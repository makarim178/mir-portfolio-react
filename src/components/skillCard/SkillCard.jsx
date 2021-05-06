import './skillCard.scss';

const SkillCard = ({skill}) => {
    return (
        
        <div className="cardSkills">
            <div className="image">
                <img src={skill.skillImageUrl} alt={skill.skillName}/>
            </div>
            <div className="cardTitle">
                <span>{skill.skillName}</span>
            </div>
        </div>
    )
}

export default SkillCard
