export default function attackExtractor(character) {
	const result = [];
	for (const key of character.special) {
		const {
			id, name, icon, description = 'Описание недоступно',
		} = key;
		result.push({
			id, name, icon, description,
		});
	}
	return result;
}
