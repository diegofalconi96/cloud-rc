function Response(data, res) {
  return res.status(200).json(data);
}

function Created(data, res) {
  return res.status(201).json(data);
}

function BadRequest(data, res) {
  return res.status(400).json({error: data});
}

function BadImplementation(data, res) {
  return res.status(500).json({error: data});
}

module.exports = {
  Created,
  Response,
  BadRequest,
  BadImplementation,
};
