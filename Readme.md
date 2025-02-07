# Chart.js Plugin ColorScheme

This plugin provides a simple way to apply a color scheme to your Chart.js datasets using a colormap and color interpolation.

## Installation

1. Include the JavaScript file in your web page (after chart.js):
   ```html
   <script src="path/to/chart.js"></script>
   <script src="path/to/chartjs-plugin-colorscheme.js"></script>
   ```
2. Or install via npm:
   ```bash
   npm install chartjs-plugin-colorscheme
   ```

## Usage

Add the plugin to your Chart.js configuration:
```js
const config = {
  type: 'bar',
  data: {
    datasets: [
      {
        // ...existing dataset options...
        data: [10, 20, 30, 40]
      }
    ]
  },
  options: {
    plugins: {
      ColorScheme: {
        colormap: 'jet',
        alpha: 1,
        shades: 10
      }
    }
  }
};
```

## Options

* **colormap**: Specifies the colormap to use (e.g. 'jet', 'rainbow').
* **alpha**: Controls the transparency of the colors.
• **shades**: Defines the number of color shades.

## License

MIT License
