/**
 * Defines the options for the sequelize configuration model.
 *
 * #### Example
 *
 * ```javascript
 * // With the table name as a string
 * const options = modelOptions(false, 'Gift', 'gift');
 * // With the table name as a variable
 * const options = modelOptions(false, 'Gift', GIFT_TABLE);
 * ```
 *
 * @param {boolean} timestamps - if the model should have timestampss
 * @param {string} modelName - the model name
 * @param {string} tableName - the table name
 * @returns {object} the model's options
 */
const modelOptions = (timestamps, modelName, tableName) => {
	return {
		timestamps: timestamps || false,
		modelName: modelName,
		tableName: tableName,
	};
};

module.exports = modelOptions;
