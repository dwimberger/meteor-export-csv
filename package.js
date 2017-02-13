Package.describe({
  summary: "Export a collection to csv",
  name: "dwimberger:exportcsv",
  version: "0.0.9",
  git: "https://github.com/dwimberger/meteor-export-csv.git"
});

Package.on_use(function(api) {
  api.add_files([
    'lib/exportcsv.js'
  ], ['client', 'server']);
  api.add_files([
    'lib/FileSaver.min.js'
  ], ['client']);
  if (api.export) {
    api.export('exportcsv');
    api.export('saveAs');
  }
});
