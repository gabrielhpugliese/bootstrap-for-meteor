function MyLang () {
    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;

    this.lang = 'en';
    this.deps = new Deps.Dependency;

    this.get = function () {
        Deps.depend(this.deps);
        return this.lang;
    };

    this.set = function (value) {
        this.lang = value;
        this.deps.changed();
    };
}

