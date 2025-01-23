type SkillsType = {
	src: string;
	alt: string;
};

export default function Skill({ skill }: { skill: SkillsType }) {
	return (
		<li>
			<img src={skill.src} alt={skill.alt} />
		</li>
	);
}
