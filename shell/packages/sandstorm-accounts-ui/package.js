Package.describe({
  summary: "Sandstorm fork of accounts-ui",
  version: "0.1.0"
});

Package.onUse(function (api) {
  api.use(['tracker', 'service-configuration', 'accounts-base',
           'underscore', 'templating', 'session'], 'client');
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  // Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
  // services.
  api.use('sandstorm-accounts-oauth', {weak: true});
  // Allow us to directly test if accounts-password (which doesn't use
  // Accounts.oauth.registerService) exists.
  api.use('accounts-password', {weak: true});

  api.use('less', 'client');

  api.addFiles(['login_buttons.less'], 'client');

  api.addFiles([
    'accounts_ui.js',

    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    'login_buttons_dialogs.html',

    'login_buttons_session.js',

    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js',
    'login_buttons_dialogs.js'], 'client');
});

Package.onTest(function (api) {
  api.use('sandstorm-accounts-ui');
  api.use('tinytest');
  api.addFiles('accounts_ui_tests.js', 'client');
});
