module.exports = function (self) {
  self.pushAssets = function() {
    self.pushAsset('stylesheet', 'module', { when: 'user' });
    self.pushAsset('script', 'page-scan-modal', { when: 'user' });
    self.pushAsset('script', 'user', { when: 'user' });
  };
};