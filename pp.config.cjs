const indexSections = [
  {section: 'header', misMatchThreshold: 0.3},
  {section: 'hero', misMatchThreshold: 0.3},
  {section: 'tours', misMatchThreshold: 0.3},
  {section: 'training', misMatchThreshold: 0.3},
  {section: 'about', misMatchThreshold: 0.3},
  {section: 'reviews', misMatchThreshold: 0.3},
  {section: 'adv', misMatchThreshold: 0.3},
  {section: 'gallery', misMatchThreshold: 0.3},
  {section: 'form', misMatchThreshold: 0.3},
  {section: 'footer', misMatchThreshold: 0.3}
]

const VIEWPORTS = {
  'desktop': {"label": "desktop", "width": 1366, "height": 800},
  'tablet': {"label": "tablet", "width": 768, "height": 1024},
  'mobile': {"label": "mobile", "width": 320, "height": 480}
};

const URL = 'http://localhost:3000/index.html';
const REFERENCE_URL = './figma/index.html';

function generateScenario(section, misMatchThreshold, viewport) {
  return {
    "label": `${section}`,
    "url": URL,
    "referenceUrl": REFERENCE_URL,
    selectors: [`[data-test="${section}"]`],
    misMatchThreshold: misMatchThreshold || 5,
    requireSameDimensions: true,
    delay: 500,
    ...viewport ? {"viewports": [VIEWPORTS[viewport]]} : {}
  };
}

module.exports = {
  "id": "tours test-pp",
  "onReadyScript": "onReady.cjs",
  "onBeforeScript": "onBefore.cjs",
  "viewports": [
    {
      "label": "mobile",
      "width": 320,
      "height": 480,
    },
    {
      "label": "tablet",
      "width": 768,
      "height": 1024,
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 800,
    }
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "errorType": "movementDifferenceIntensity",
    "transparency": 0.3,
    scaleToSameSize: false
  },
  "scenarios": [
    ...indexSections.map(({section, misMatchThreshold}) => generateScenario(section, misMatchThreshold)),
  ],
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "bitmaps_reference/test-pp",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
    "json_report": "backstop_data/json_report",
  },
  "report": ["browser", "json"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": {"waitUntil": ["load", "networkidle0"], timeout: 30000},
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
