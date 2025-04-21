/**
 * @typedef {Object} defTypes
 * @property {Object<string>} [headers]
 * @property {json|ArrayBuffer} [body]
 * @property {'json'|'text'|'document'|'buffer'} [contentType]
 */

/** 
 * @type {defTypes}
 */
const defaulConfig = {
    headers: {Authrization: myToken}
};

/**
 * @typedef {Object} retPromise
 * @property {Promise<object>} json
 * @property {Promise<string>} text
 * @property {Promise<Document>} document
 * @property {Promise<ArrayBuffer>} buffer


/**
 * @param {string} url
 * @param {defTypes} params
 * @returns {Promise<retPromise>}
 */
function post(url, params) {};


/**
 * @param {string} url
 * @param {defTypes} params
 * @returns {Promise<retPromise>}
 */
function put(url, params) {};