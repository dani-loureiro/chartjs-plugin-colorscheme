(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["color-interpolate", "colormap"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("color-interpolate"), require("colormap"));
    } else {
        global.ColorScheme = factory(global.interpolate, global.cmap);
    }
})(this, function (interpolate, cmap) {
    "use strict";

    const ColorScheme = {
        id: "ColorScheme",
        beforeUpdate(chart, args, options) {
            if (!options) return;

            const colors = cmap({
                colormap: options.colormap,
                format: "rgb",
                alpha: options.alpha,
                nshades: options.shades,
            });
            const colormap = interpolate(colors);
            chart.data.datasets.forEach((ds, i) => {
                if (chart.data.datasets.length === 1) {
                    ds.backgroundColor = ds.data.map((_, j) => colormap(j / ds.data.length));
                } else {
                    ds.backgroundColor = colormap((100 / chart.data.datasets.length) * i / 100);
                }
            });
        },
        defaults: {
            colormap: "jet",
            alpha: 1,
            shades: 10,
        },
    };

    return ColorScheme;
});
