const items = []

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello World!"),
  };
};
