module.exports = {
  name: 'bootstrap-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bootstrap-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
