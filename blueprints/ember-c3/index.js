module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('d3', '3.5.17')
      .then(function() {
        return self.addBowerPackageToProject('c3')
          .then(function() {
            self.addAddonToProject('ember-d3@0.2.0');
          });
      });
  }
};
