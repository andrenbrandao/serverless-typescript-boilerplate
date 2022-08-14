import schema from './schema';

export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
  // Remove this if you want to disable Canary Deployments
  deploymentSettings: {
    type: 'Linear10PercentEvery1Minute',
    alias: 'Live',
    alarms: ['Hello5XXErrorsAlarm', 'HelloFunctionErrorsAlarm'],
  },
};
