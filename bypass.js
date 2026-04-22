Java.perform(function () {
    var C = Java.use("sg.vantagepoint.a.c");

    C.a.implementation = function () {
        var ret = this.a();
        console.log("c.a() = " + ret);
        return ret;
    };

    C.b.implementation = function () {
        var ret = this.b();
        console.log("c.b() = " + ret);
        return ret;
    };

    C.c.implementation = function () {
        var ret = this.c();
        console.log("c.c() = " + ret);
        return ret;
    };
});
