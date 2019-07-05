const Hapi = require('hapi');
const {getApiResponse} = require('wildcard-api');
const knex = require('../db/setup');
const ssr = require('goldpage');
require('./api');

(async () => {
  const server = Hapi.Server({
    port: process.env.PORT || 3000,
    debug: {request: ['internal']},
  });

  server.route({
    method: '*',
    path: '/wildcard/{param*}',
    handler: async (request, h) => {
      const {body, statusCode, type} = await getApiResponse(request.raw.req);
      const resp = h.response(body);
      resp.code(statusCode);
      resp.type(type);
      return resp;
    }
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');
})();
