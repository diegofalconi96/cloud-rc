const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function saveFile(req, res) {
  try {
    const base64Data = req.body.base64;
    const binaryData = Buffer.from(base64Data, 'base64');
    const fileName = `file_${uuidv4()}.png`;
    const relativePath = path.join('files', 'images', fileName);
    fs.writeFileSync(
        path.join(__dirname, '../../../', relativePath), binaryData,
    );
    return Response({ path: relativePath }, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { saveFile };
