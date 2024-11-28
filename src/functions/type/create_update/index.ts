import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'product/type',
      }
    },
    {
      http: {
        method: 'put',
        path: 'product/type',
      }
    }
  ]
}