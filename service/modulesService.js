const db = require('../db'); 
const utils = require('../utils');
const config = require('../config');
const tableName = 'magisk_modules';
const fieldurl = 'url';
const fieldName = 'nazwa_modulu';
const fieldVer = 'wersja';

async function getAll() {
const result = await db.query("SELECT * FROM " + tableName)
return utils.getData(result);
}
async function save(magisk_modules) { 
    const result = await db.query(
        'INSERT INTO ' + tableName + '(' + fieldurl + ', ' + fieldName +') VALUES (' + magisk_modules.url + ', ' + magisk_modules.nazwa_modulu  + ', ' + magisk_modules.wersja + ')');
    let message = 'Error during saving module data.';
if (result.affectedRows) {
    message = 'Module data saved successfully.';
}
return (message);
}

module.exports = {
    getAll,
    save
}