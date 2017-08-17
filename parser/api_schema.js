var trim = require('trim');

function parse(content) {
	content = trim(content);

	if (content.length === 0)
		return null;
	
	// @apiSchema (optional group) {jsonschema=relative_path} {base_path=xx} additional_argument
	var parseRegExp = /^(?:\((.+?)\)){0,1}\s*\{(.+?)=(.+?)\}\s*\{(.+?)=(.+?)\}\s*(?:(.+))?/g;
	var matches = parseRegExp.exec(content);

	if ( ! matches)
		return null;
	console.log(matches)
	return {
		group: matches[1],
		schema : matches[2],
        path : matches[3],
        base_path : matches[5],
		element : matches[6] || 'apiParam',
	};
}
// console.log(parse('(optional group) {jsonschema=relative_path} {base_path=xx} additional_argument'))

/**
 * Exports
 */
module.exports = {
	parse        : parse,
	path         : 'local',
	method       : 'push',
	preventGlobal: true
};
