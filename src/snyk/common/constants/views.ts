export const SNYK_VIEW_WELCOME = 'snyk.views.welcome';
export const SNYK_VIEW_FEATURES = 'snyk.views.features';
export const SNYK_VIEW_ANALYSIS_CODE_SECURITY = 'snyk.views.analysis.code.security';
export const SNYK_VIEW_ANALYSIS_CODE_QUALITY = 'snyk.views.analysis.code.quality';
export const SNYK_VIEW_SUPPORT = 'snyk.views.support';
export const SNYK_VIEW_ACTIONS = 'snyk.views.actions';
export const SNYK_VIEW_SUGGESTION = 'snyk.views.suggestion';

// Having multiple boolean contexts instead of a single context
// with multiple values helps us to avoid flickering UI.
export const SNYK_CONTEXT = {
  LOGGEDIN: 'loggedIn',
  AUTHENTICATING: 'authenticating',
  FEATURES_SELECTED: 'featuresSelected',
  CODE_ENABLED: 'codeEnabled',
  WORKSPACE_FOUND: 'workspaceFound',
  ERROR: 'error',
  MODE: 'mode',
  ADVANCED: 'advanced',
};

export const SNYK_ERROR_CODES = {
  TRANSIENT: 'transient',
  BLOCKING: 'blocking',
};

export const SNYK_MODE_CODES = {
  AUTO: 'auto',
  MANUAL: 'manual',
  PAUSED: 'paused',
  THROTTLED: 'throttled',
};

export const SNYK_ANALYSIS_STATUS = {
  FILTERS: 'Supported extentions',
  COLLECTING: 'Collecting files',
  BUNDLING: 'Creating file bundles',
  UPLOADING: 'Uploading files',
  CODE_SECURITY_DISABLED: 'Snyk Code Security is disabled. Enable it in settings to use it.',
  CODE_QUALITY_DISABLED: 'Snyk Code Quality is disabled. Enable it in settings to use it.',
};
