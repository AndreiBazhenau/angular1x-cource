function Scope() {
    this.$watchers = [];

    this.$watch = function(name, callback) {
        this.$watchers.push({ name: name, callback: callback });
    }

    this.$digest = function() {
        for (var index = 0; index < this.$watchers.length; index++) {
            var watcher = this.$watchers[index];
            watcher.callback(this[watcher.name]);
        }
    }
}
